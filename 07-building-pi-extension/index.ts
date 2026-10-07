import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { TypeSafeClient } from "@typesafe-ai/sdk";
import { registerSafetyShield } from "./safety_shield.ts";
import { registerSubagentRouter } from "./subagent_router.ts";

export default function jevAgentRouter(pi: ExtensionAPI) {
  const client = new TypeSafeClient(); // reads TYPESAFE_API_KEY
  registerSafetyShield(pi, client);
  registerSubagentRouter(pi, client);
}
