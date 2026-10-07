import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { choice, TypeSafeClient } from "@typesafe-ai/sdk";

// One model per tier. Edit this map to route to your own provider's models.
const MODELS = {
  simple: { provider: "openai-codex", id: "gpt-6-luna" },
  standard: { provider: "openai-codex", id: "gpt-6-sol" },
  complex: { provider: "openai-codex", id: "gpt-6-astra" },
};

const TIER = choice("How demanding is the software engineering work in `prompt`?", {
  simple: "A question, a lookup, or a small mechanical edit",
  standard: "An ordinary feature, bug fix, test, or code review",
  complex: "Subtle design, a cross-cutting change, or hard debugging",
});

export default function (pi: ExtensionAPI) {
  pi.registerCommand("jev", {
    description: "Let Jev pick the model for this prompt",
    handler: async (args, ctx) => {
      const prompt = args.trim();
      if (!prompt) {
        ctx.ui.notify("Usage: /jev <prompt>", "error");
        return;
      }

      // 1. Ask Jev one Choice: how demanding is this prompt?
      const client = new TypeSafeClient(); // reads TYPESAFE_API_KEY
      const start = performance.now();
      const { answers } = await client.systemOne({ state: { prompt }, questions: { tier: TIER } });
      const ms = Math.round(performance.now() - start);
      const tier = answers.tier.choice;
      const p = answers.tier.probabilities[tier];

      // 2. Look up the model for that tier.
      const { provider, id } = MODELS[tier];
      const model = ctx.modelRegistry.find(provider, id);
      if (!model) throw new Error(`Model ${provider}/${id} is not in the registry. Edit MODELS.`);

      // 3. Cache guard: switching models mid-session discards the prompt cache.
      const switching = ctx.model?.provider !== provider || ctx.model?.id !== id;
      const messages = ctx.sessionManager
        .getBranch()
        .filter((e) => e.type === "message" && ["user", "assistant"].includes(e.message.role));
      if (switching && messages.length > 0) {
        if (!ctx.hasUI) throw new Error("/jev needs a UI to confirm a mid-session model switch.");
        const ok = await ctx.ui.confirm(
          "Switch model and lose the prompt cache?",
          `Switching ${ctx.model?.id} → ${id} mid-session discards the prompt cache ` +
            `(${messages.length} messages are re-sent at the full input price). Switch?`,
        );
        if (!ok) {
          ctx.ui.notify("Cancelled. Re-run /jev in a new session (/new) to route without losing the cache.", "warning");
          return;
        }
      }

      // 4. Switch, show the decision, and send the prompt to the routed model.
      if (switching && !(await pi.setModel(model))) throw new Error(`No credentials for ${provider}. Run /login.`);
      ctx.ui.notify(`Jev: ${tier} (p=${p.toFixed(2)}) → ${id} · ${ms} ms`, "info");
      pi.sendUserMessage(prompt);
    },
  });
}
