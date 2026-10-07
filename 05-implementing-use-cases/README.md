# Lesson 05 — Jev Use Cases in Code

One notebook, `05_use_cases.ipynb`, with one worked example for each category from Lesson 04, using public datasets and generated games:

| Section | Example | Data | Jev questions |
|---|---|---|---|
| 1. AI-powered workflows | Route support tickets; escalate the unsure ones to GPT-6 Luna | 500 synthetic messages from the [Bitext customer support dataset](https://huggingface.co/datasets/bitext/Bitext-customer-support-llm-chatbot-training-dataset) (CDLA-Sharing-1.0) | `Choice` queue + `Noul` status request |
| 2. Map-reducing big data | Label every commit, then count and filter | The full git history of [`psf/requests`](https://github.com/psf/requests) (~4,900 commits) | `Choice` kind of change + `Noul` security fix |
| 3. Real-time applications | Jev plays text adventure games, one action per turn | 10 [TextWorld](https://github.com/microsoft/TextWorld) cooking games, generated locally (MIT) | `Choice` over the game's commands |
| 4. Verify everything | Check scientific claims against abstracts | 340 claim–abstract pairs from [SciFact](https://github.com/allenai/scifact) (CC BY 4.0 / ODC-By 1.0) | `Choice` supports / contradicts / says nothing |

Tickets and claim–abstract pairs use gold labels to evaluate accuracy and confidence thresholds. Git history uses candidate spot checks without gold labels; games measure wins and decision latency. All four report cost from API token usage. Recorded slide results can differ from live runs.

## Run

Needs `TYPESAFE_API_KEY`, plus `OPENAI_API_KEY` for section 1's escalation step. Follow **Setup** in the root `README.md` to install dependencies and populate `.env`. The first code cell loads the keys. From the repo root:

```bash
uv run jupyter lab
```

Open `05-implementing-use-cases/05_use_cases.ipynb` and run it from the top. A full run takes a few minutes and costs about $0.13 in Jev calls plus a fraction of a cent for GPT-6 Luna.

## Data

Everything is downloaded or generated when you run the notebook:

- Bitext and SciFact come from Hugging Face (cached in `~/.cache/huggingface`).
- `psf/requests` is cloned without file contents into `data/requests.git` (about a second).
- TextWorld games are generated into `data/textworld/`.

`data/` is gitignored. TextWorld supports macOS and Linux only; on Windows, TextWorld suggests Docker.
