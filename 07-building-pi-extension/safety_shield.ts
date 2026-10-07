import { type ExtensionAPI, isToolCallEventType } from "@earendil-works/pi-coding-agent";
import { noul, type TypeSafeClient } from "@typesafe-ai/sdk";

const RISK_THRESHOLD = 0.8;

/** Ask Jev whether each bash command is destructive, and confirm risky ones with the user. */
export function registerSafetyShield(pi: ExtensionAPI, client: TypeSafeClient) {
  pi.on("tool_call", async (event, ctx) => {
    if (!isToolCallEventType("bash", event)) return undefined;
    const command = event.input.command;

    const { answers } = await client.systemOne({
      state: { command },
      questions: {
        destructive: noul("Could running `command` permanently lose files, uncommitted work, or commits?", {
          true: "Deletes source files or data, discards uncommitted changes, drops or rewrites commits, force-pushes, or drops database tables",
          false: "Only reads, builds, tests, commits, or deletes generated files that can be rebuilt (node_modules, dist, caches)",
        }),
      },
    });
    const risk = answers.destructive.noul;
    if (risk < RISK_THRESHOLD) return undefined;

    const reason = `[Jev Safety Alert] Risk: ${(risk * 100).toFixed(1)}%`;
    if (!ctx.hasUI) return { block: true, reason };
    const allowed = await ctx.ui.confirm(reason, `${command}\n\nRun this command?`);
    return allowed ? undefined : { block: true, reason: `${reason}. Blocked by user.` };
  });
}
