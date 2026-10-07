import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { choice, type TypeSafeClient } from "@typesafe-ai/sdk";

const CONFIDENCE_THRESHOLD = 0.85;

const PERSONAS = {
  general_coder: "You are a focused implementer. Make the requested change with minimal, working code.",
  codebase_researcher: "You are a codebase researcher. Explore and explain; do not edit files.",
  adversarial_reviewer: "You are an adversarial reviewer. Look for bugs, security holes, and wrong assumptions.",
};

/** Pick a specialist persona for each prompt with Jev, and add it to the system prompt. */
export function registerSubagentRouter(pi: ExtensionAPI, client: TypeSafeClient) {
  pi.on("before_agent_start", async (event, ctx) => {
    const { answers } = await client.systemOne({
      state: { prompt: event.prompt },
      questions: {
        persona: choice("Which specialist should handle the developer request in `prompt`?", {
          general_coder: "Write or change code",
          codebase_researcher: "Find, explore, or explain existing code",
          adversarial_reviewer: "Review, audit, or look for problems",
        }),
      },
    });
    const { choice: persona, confidence } = answers.persona;

    if (confidence < CONFIDENCE_THRESHOLD) {
      delete event.systemPromptOptions.sections.persona;
      return;
    }
    event.systemPromptOptions.sections.persona = PERSONAS[persona];
    ctx.ui.notify(`[Jev Router] ${persona} (confidence ${confidence.toFixed(2)})`, "info");
  });
}
