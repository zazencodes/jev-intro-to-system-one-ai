# Jev: Introduction to System 1 AI — Course Resources

Companion starter code, exercises, benchmarks, and custom extensions for the **Jev: Introduction to System 1 AI** course by [ZazenCodes](https://www.youtube.com/@ZazenCodes) — teaching how to use fast, non-autoregressive decision models in AI agents.

Stop using heavy LLMs for simple agent routing, guardrails, and intent classification. Learn how to combine fast "System 1" reflexes with deep "System 2" reasoning models.

---

## Get the Course

- **Skool — ZazenCodes Agentic Coding Club (Premium):** Included with membership alongside the full course catalogue, agent skills, and weekly code-with-me sessions — <https://www.skool.com/zazencodes-agentic-coding-club-7823>
- **One-time purchase:** <https://zazencodes.com>

---

## Course Roadmap & Repository Layout

Each directory holds the resources for one lesson:

| Directory | What it is | Lesson |
|---|---|---|
| [`02-what-is-jev/`](./02-what-is-jev) | Primary sources on TypeSafe, RLCD training, and what is known about Jev | Lesson 02 |
| [`03-three-primitives/`](./03-three-primitives) | Notebook: Jev's `Noul`, `Choice`, and `Score` primitives, plus a latency and cost benchmark against GPT-6 Sol and Claude Opus 5.5 | Lesson 03 |
| [`04-jev-use-cases/`](./04-jev-use-cases) | Catalog of public Jev projects in four categories: workflows, map-reduce, real-time, and verification | Lesson 04 |
| [`05-implementing-use-cases/`](./05-implementing-use-cases) | Notebook: one worked example per category on real data (support tickets, a repo's git history, text games, scientific claims) | Lesson 05 |
| [`06-pi-extension-architecture/`](./06-pi-extension-architecture) | Architecture & lifecycle hook blueprints for `@earendil-works/pi-coding-agent` | Lesson 06 |
| [`07-building-pi-extension/`](./07-building-pi-extension) | Pi extension `jev-agent-router` (destructive command safety shield & persona router) | Lesson 07 |
| [`08-real-world-patterns/`](./08-real-world-patterns) | Edge API gateway firewall and automated CI/CD PR risk evaluation scripts | Lesson 08 |
| [`09-ecosystem-survey/`](./09-ecosystem-survey) | Decision matrix, ecosystem patterns, and the Course Capstone Challenge | Lesson 09 |

---

## Setup

You need [uv](https://docs.astral.sh/uv/getting-started/installation/) and a TypeSafe API key from <https://console.typesafe.ai/keys>. The benchmark at the end of the Lesson 03 notebook also needs OpenAI and Anthropic API keys, and the Lesson 05 notebook needs an OpenAI key. Lesson 05's text games use [TextWorld](https://github.com/microsoft/TextWorld), which supports macOS and Linux only (on Windows, TextWorld suggests Docker).

### 1. Clone and Install
```bash
git clone https://github.com/zazencodes/system-one-ai-with-jev-course.git
cd system-one-ai-with-jev-course
uv sync
```

### 2. Set Your API Keys
```bash
export TYPESAFE_API_KEY="..."
export OPENAI_API_KEY="..."     # Lesson 03 benchmark, Lesson 05
export ANTHROPIC_API_KEY="..."  # Lesson 03 benchmark
```

### 3. Open the Notebooks
From the same shell, so Jupyter sees your keys:
```bash
uv run jupyter lab
```
Then open the lesson's notebook, starting with `03-three-primitives/03_primitives_demo.ipynb`.

### 4. Install the Pi Extension's Dependencies (Lesson 07)
```bash
cd 07-building-pi-extension
npm install
```

---

## License

Resources and sample code are released under the [MIT License](./LICENSE). Build with them, modify them, and use them in your own agent systems.
