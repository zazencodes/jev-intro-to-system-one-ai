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
| [`05-implementing-use-cases/`](./05-implementing-use-cases) | Notebook: one worked example per category using public datasets and generated games | Lesson 05 |
| [`06-custom-pi-model-router/`](./06-custom-pi-model-router) | Live build of a `/jev` slash command for the Pi coding agent: Jev picks the model for a prompt. Build prompt and reference solution | Lesson 06 |
| [`07-jev-in-the-wild/`](./07-jev-in-the-wild) | Real Jev projects shown in the final lesson, with links | Lesson 07 |

---

## Setup

You need [uv](https://docs.astral.sh/uv/getting-started/installation/) and a TypeSafe API key from <https://console.typesafe.ai/keys>. The benchmark at the end of the Lesson 03 notebook also needs OpenAI and Anthropic API keys, and the Lesson 05 notebook needs an OpenAI key. Lesson 05's text games use [TextWorld](https://github.com/microsoft/TextWorld), which supports macOS and Linux only (on Windows, TextWorld suggests Docker).

### 1. Clone and Install
```bash
git clone https://github.com/zazencodes/system-one-ai-with-jev-course.git
cd system-one-ai-with-jev-course
uv sync
```

`uv sync` installs the notebook dependencies, including `python-dotenv` for loading API keys.

### 2. Populate `.env`

Copy the template into the repository root:

```bash
cp .env.example .env
```

Edit `.env` and fill in your keys:

```dotenv
TYPESAFE_API_KEY=your_typesafe_key
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key
```

`TYPESAFE_API_KEY` is required for both notebooks. Lesson 05 also needs `OPENAI_API_KEY`; Lesson 03's final benchmark needs both OpenAI and Anthropic keys. `.env` is ignored by Git.

Both notebooks call `load_dotenv` in their first code cell to load this file. Notebook kernels start in their lesson folders, so the file path is `../.env`. Values in this file override existing shell variables.

### 3. Open the Notebooks
From the repository root:
```bash
uv run jupyter lab
```
Then open the lesson's notebook, starting with `03-three-primitives/03_primitives_demo.ipynb`.

### 4. Set Up Pi (Lesson 06)

Lesson 06 builds an extension for the [Pi coding agent](https://github.com/earendil-works/pi). It needs Node.js and npm.

```bash
curl -fsSL https://pi.dev/install.sh | sh
```

Start `pi` and run `/login` to connect a model provider. The extension reads `TYPESAFE_API_KEY` from Pi's environment, so export it in the shell before you start Pi:

```bash
export TYPESAFE_API_KEY=your_typesafe_key
```

Then follow [`06-custom-pi-model-router/README.md`](./06-custom-pi-model-router/README.md).

---

## License

Resources and sample code are released under the [MIT License](./LICENSE). Build with them, modify them, and use them in your own agent systems.
