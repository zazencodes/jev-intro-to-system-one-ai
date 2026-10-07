# Lesson 07 — Building the Jev Pi Extension Hands-On

`jev-agent-router` is a Pi extension with two Jev hooks:

1. **Safety shield** (`safety_shield.ts`): on every `bash` tool call, asks Jev a `Noul` about whether the command can permanently lose work. At `>= 0.80` Pi asks you to confirm; without a UI (print mode) the command is blocked.
2. **Persona router** (`subagent_router.ts`): on every prompt, asks Jev a `Choice` between `general_coder`, `codebase_researcher`, and `adversarial_reviewer`. At confidence `>= 0.85` it adds that persona to the system prompt.

## Run

Needs `TYPESAFE_API_KEY`. Pi loads TypeScript directly, so there is no build step.

```bash
cd 07-building-pi-extension
npm install
pi -e ./index.ts
```
