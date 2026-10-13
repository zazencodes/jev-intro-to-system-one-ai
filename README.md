# Jev: Introduction to Decision Models — Course Resources

Companion starter code, exercises, benchmarks, and custom extensions for the **Jev: Introduction to Decision Models** course by [ZazenCodes](https://zazencodes.com/) — teaching how to use fast, non-autoregressive decision models in AI agents.

## Get the Course

- **One-time purchase:** <https://zazencodes.com/courses/jev-intro-to-decision-models>
- **Skool — ZazenCodes Agentic Coding Club (Premium):** Included with membership alongside the full course catalogue, agent skills, and weekly code-with-me sessions — <https://www.skool.com/zazencodes-agentic-coding-club-7823>

## Course Roadmap & Repository Layout

Lessons with code each have a directory:

| Directory | What it is | Lesson |
|---|---|---|
| [`03-three-primitives/`](./03-three-primitives) | Notebook: Jev's `Noul`, `Choice`, and `Score` primitives, plus a latency and cost benchmark against GPT-6 Sol and Claude Opus 5.5 | Lesson 03 |
| [`05-implementing-use-cases/`](./05-implementing-use-cases) | Notebook: one worked example per category using public datasets and generated games | Lesson 05 |
| [`06-custom-pi-model-router/`](./06-custom-pi-model-router) | Live build of a `/jev` slash command for the Pi coding agent: Jev picks the model for a prompt. Build prompt and reference solution | Lesson 06 |

Links from the other lessons (primary sources, the use-case catalog, and the projects shown in Lesson 07) are in [`LINKS.md`](./LINKS.md).

## Setup

You need [uv](https://docs.astral.sh/uv/getting-started/installation/) and a TypeSafe API key from <https://console.typesafe.ai/keys>. The benchmark at the end of the Lesson 03 notebook also needs OpenAI and Anthropic API keys, and the Lesson 05 notebook needs an OpenAI key and Git.

### 1. Clone and Install
```bash
git clone https://github.com/zazencodes/jev-intro-to-decision-models.git
cd jev-intro-to-decision-models
uv sync
```

Section 3 of Lesson 05 also needs [TextWorld](https://github.com/microsoft/TextWorld) (macOS and Linux only). Install it with `uv sync --group lesson-05`; a later plain `uv sync` removes it again.

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

`.env` is ignored by Git.

### 3. Open the Notebooks
From the repository root:
```bash
uv run jupyter lab
```
Then open the lesson's notebook, starting with `03-three-primitives/03_primitives_demo.ipynb`.

> [!TIP]
> **Alternative: Neovim Notebooks.** In the course videos I open the notebooks with [Neovim Notebooks](https://github.com/zazencodes/neovim-notebooks) (`nvb`), my open-source tool for running Jupyter notebooks in Neovim 0.12 or newer. Install it with:
>
> ```bash
> cargo install nvb
> ```
>
> Then, from the repository root, open a notebook:
>
> ```bash
> nvb 03-three-primitives/03_primitives_demo.ipynb
> ```

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

## License

Resources and sample code are released under the [MIT License](./LICENSE).

<p align="center">
  <a href="https://zazencodes.com/courses/jev-intro-to-decision-models?utm_source=github&utm_medium=referral&utm_campaign=jev-intro-to-decision-models">
    <img
      src="docs/assets/zazencodes-banner.png"
      alt="ZazenCodes — Engineering for the Agentic Era"
      width="100%"
    >
  </a>
  <br>
  Created by <a href="https://zazencodes.com/">ZazenCodes</a>
</p>
