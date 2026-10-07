# Lesson 06 — Custom Pi Model Router

## What we're building

A [Pi](https://github.com/earendil-works/pi) extension that adds a `/jev` slash command. You pick your usual model as normal. When you want Jev to choose the model for one prompt, you type it after `/jev`:

```text
/jev design a plugin system for our CLI so third parties can add commands
```

Jev answers one `Choice` (how demanding is this prompt?), the extension switches to the model for that tier, and the prompt goes to that model. Prompts without `/jev` behave exactly like stock Pi.

```text
/jev <prompt>
   │
   ▼
Jev Choice: simple │ standard │ complex       (~200 ms)
   │
   ▼
cache guard ── mid-session switch? ── ask first
   │
   ▼
pi.setModel(Luna │ Sol │ Astra)
   │
   ▼
pi.sendUserMessage(prompt)  ──►  the routed model answers
```

The routed model **stays selected** after the turn. It's an ordinary model switch, shown in Pi's footer, and the next `/jev` routes again.

## Prerequisites

- **Pi**, tested with version 1.0.2:
  ```bash
  curl -fsSL https://pi.dev/install.sh | sh
  ```
  or `npm install -g --ignore-scripts @earendil-works/pi-coding-agent` (Node.js 22.19+). Check with `pi --version`.
- **Node.js and npm** for the extension's one dependency, the TypeSafe SDK.
- **A model provider.** We use the `openai-codex` provider (a ChatGPT subscription, `/login` in Pi) with GPT-6 Luna, Sol, and Astra. Any other provider works: edit the `MODELS` map.
- **`TYPESAFE_API_KEY` exported in your shell before you start Pi.** The extension reads it from the environment. Get a key at <https://console.typesafe.ai/keys>.
  ```bash
  export TYPESAFE_API_KEY=your_typesafe_key
  ```

## Setup

```bash
mkdir jev-model-router && cd jev-model-router
npm init -y
npm install @typesafe-ai/sdk
```

## The prompt

Start your coding agent in the `jev-model-router` folder (Pi itself works: run `pi`) and paste:

````text
Build a Pi coding agent extension in this folder: one file, `jev-model-router.ts`. It adds a `/jev <prompt>` slash command that lets Jev (TypeSafe's System 1 model) pick which model handles that one prompt. `@typesafe-ai/sdk` is already installed here. Don't add dependencies, other files, or a build step: Pi loads TypeScript directly.

When I type `/jev <prompt>`:

1. Take the text after `/jev` as the prompt. If it's empty, show a "Usage: /jev <prompt>" error notification and stop.
2. Ask Jev one Choice question with the SDK's `client.systemOne` and its `choice` helper, with state `{ prompt }`. Use exactly this question and these criteria:
   - question: "How demanding is the software engineering work in `prompt`?"
   - simple: "A question, a lookup, or a small mechanical edit"
   - standard: "An ordinary feature, bug fix, test, or code review"
   - complex: "Subtle design, a cross-cutting change, or hard debugging"
   The answer's `choice` is the tier. Time the call in milliseconds.
3. Pick the model for the tier from a `MODELS` map at the top of the file, so it's the only thing to edit for another provider:
   - simple: provider `openai-codex`, model `gpt-6-luna`
   - standard: provider `openai-codex`, model `gpt-6-sol`
   - complex: provider `openai-codex`, model `gpt-6-astra`
   Look the model up with `ctx.modelRegistry.find(provider, id)`.
4. Cache guard. Switching models mid-session discards the prompt cache. If the routed model differs from the current one (`ctx.model`) and the current branch already has user or assistant messages (`ctx.sessionManager.getBranch()`), ask with `ctx.ui.confirm` before switching. The confirm message says the switch discards the prompt cache, names both models, and says how many user and assistant messages would be re-sent at the full input price. If I answer no, cancel the whole command: don't switch, don't send the prompt, and show a warning that tells me to re-run it in a new session (`/new`). If this check needs to ask but there is no UI (`ctx.hasUI` is false), throw an error instead of switching. Don't ask on the first prompt of a session or when the model doesn't change.
5. Switch with `pi.setModel(model)`, then show the decision with `ctx.ui.notify`: the tier, its probability (2 decimals), the model id, and the Jev latency in ms.
6. Send the prompt with `pi.sendUserMessage(prompt)` so the routed model answers it. The routed model stays selected afterwards.

Fail loudly, with no fallback model: let a missing `TYPESAFE_API_KEY` or an SDK error throw, and throw a clear error if the model isn't in the registry or `pi.setModel` returns false. Prompts without `/jev` must behave exactly as before.

Keep the file short and readable, around 60 lines. Read these docs first:
- Pi extensions: https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/extensions.md
- Pi extension API types (`registerCommand`, the command context, `ui.confirm`, `ui.notify`, `sessionManager`, `modelRegistry.find`, `setModel`, `sendUserMessage`): https://github.com/earendil-works/pi/blob/main/packages/coding-agent/src/core/extensions/types.ts
- TypeSafe JavaScript SDK: https://docs.typesafe.ai/sdk/javascript and Choice questions: https://docs.typesafe.ai/primitives/choice (the SDK's types are in `node_modules/@typesafe-ai/sdk/dist/index.d.mts`)

Don't start Pi to test it. When you're done, tell me to run `pi -e ./jev-model-router.ts`.
````

## Run it

From the `jev-model-router` folder, with `TYPESAFE_API_KEY` exported:

```bash
pi -e ./jev-model-router.ts
```

If `/jev` is sent to the model as plain text instead of showing a `Jev: …` notification, the extension isn't loaded.

**Install it permanently.** Pi loads extension folders whose `package.json` names the entry file. Add that, copy the folder (with its `node_modules`) into Pi's extensions directory, and reload:

```bash
npm pkg set "pi.extensions[0]=./jev-model-router.ts"
mkdir -p ~/.pi/agent/extensions
cp -R . ~/.pi/agent/extensions/jev-model-router
```

Then run `/reload` in Pi (or restart it). To load it for one project only, copy the folder to that project's `.pi/extensions/jev-model-router/` instead.

## Try it

Start Pi on your usual model (we used `gpt-6-sol`) and try these in order. The routes are what we observed on 2026-10-07; probabilities can differ slightly between runs.

| # | You type | Jev | Model | Cache warning? |
|---|---|---|---|---|
| 1 | `/jev what does git rebase --onto do? Answer in one sentence.` | simple, p=1.00 | `gpt-6-luna` | No: first prompt of the session |
| 2 | `/jev write unit tests for the parseDuration function in utils/time.ts` | standard, p=0.99 | `gpt-6-sol` | **Yes**: Luna → Sol mid-session |
| 3 | `Thanks. What does git bisect do? One sentence.` | not routed | stays on the current model | No: plain prompt |
| 4 | `/jev we get an intermittent deadlock in the job queue under load, only in production. find the root cause` | complex, p=1.00 | `gpt-6-astra` | **Yes**: answer No to keep the model and the transcript unchanged |

Then run `/new` and repeat prompt 4: on the first prompt of a fresh session it routes to Astra with no warning. That's the cheap way to use `/jev`: route at the start of a task, not in the middle of one.

## Make it yours

- **Other models or providers:** edit `MODELS` at the top of the file. Any model in `/model` works.
- **Different tiers:** change the criteria wording, or add a tier (and its `MODELS` entry). Criteria wording moves results a lot, so test it on your own prompts.

The reference implementation is in [`solution/`](./solution). To run it instead of building your own:

```bash
cd solution && npm install && pi -e ./jev-model-router.ts
```
