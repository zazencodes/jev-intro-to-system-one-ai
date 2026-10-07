# Lesson 07 — Jev in the Wild

This lesson has no code. It shows real projects built with Jev in its first three weeks, one per slide, grouped by the four categories from Lesson 04.

Numbers are each project's own measurements unless noted, and most come from small samples. Links checked 2026-10-07.

## 1. AI-Powered Workflows

- [Pi `jev-router.ts`](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/examples/extensions/jev-router.ts) — Pi's built-in Jev router: plans on a strong model, then hands implementation to a cheap one
- [Unblocked](https://getunblocked.com/blog/jev-in-production-vs-cross-encoder/) — in production, Jev decides which saved notes reach the agent, replacing a cross-encoder
- [Entagl](https://www.entagl.com/blog/typesafe-jev-benchmark-ai-decision-models) — 13 support-agent decisions benchmarked against Gemini, with a calibration chart
- [DocJev](https://github.com/jerryjliu/docjev) — classify documents and split PDF packets
- [Hermes Jev Skills](https://github.com/kerpopule/hermes-jev-skills) — pick the model for each agent turn, plus skill selection and screening
- [Jev Recall](https://github.com/samdotmak/jev-recall) — keep only the memories that matter for this request

## 2. Map-Reducing Big Data

- [MotherDuck `prompt_jev()`](https://motherduck.com/blog/motherduck-supports-jev/) — a SQL function that labels a text column
- [Sure](https://github.com/we-promise/sure/pull/3660) — categorize bank transactions in an open-source finance app, with a confidence threshold
- [jev-ultralightspeed](https://github.com/collapseindex/jev-ultralightspeed) — pack many records into one Jev request
- [jevgrep](https://github.com/dzhng/jevgrep) — find the relevant code before a coding agent reads it

## 3. Real-Time Applications

- [Jev Pong](https://jev-pong.ably.dev) — Jev and chat models play Pong; the ball moves once per decision
- [Browser Use jev-ultrafast](https://github.com/browser-use/jev-ultrafast) — Jev picks each browser action and element
- [Droidrun Mobile Jev](https://github.com/droidrun/mobile-jev) — drive a real Android phone
- [jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser) — act on spoken browser commands as speech arrives
- [Jev Plays Pokémon Red](https://github.com/christianmat/jev-pokemon) — Jev makes every decision in a full playthrough

## 4. Verify Everything

- [Firecrawl safe search](https://github.com/firecrawl/firecrawl/pull/4865) — drop adult results from web search
- [jev-edge](https://github.com/kiwi0719/jev-edge) — prompt-injection screening at an API gateway
- [jevc](https://github.com/doronp/jevc) — compile agent rules into narrow questions and a verdict in code
- [Pi Auto Mode](https://github.com/counterposition/pi/tree/main/packages/pi-auto-mode) — approve routine Pi tool calls automatically, and ask before risky ones

## Benchmarks

- [JevBench](https://github.com/fstandhartinger/jevbench) — an independent benchmark of Jev and open-weights decision models ([live board](https://benchmarkheaven.com/jev-models))

## Where Jev Lost

Measured and not adopted, or beaten:

- [Hermes Agent compaction scorecard](https://github.com/NousResearch/hermes-agent/blob/main/evals/compaction/results/SCORECARD-2026-09-19-jev.md) — "Do not adopt Jev" for context compaction
- [World Monitor](https://github.com/koala73/worldmonitor/pull/8625) — Jev kept in shadow mode for news alert labels
- [Red Hat guardrail benchmark](https://developers.redhat.com/articles/2026/10/02/benchmarking-ai-decision-models-against-traditional-guardrails) — 1st on content safety, 4th on prompt injection
- [Casco CVSS benchmark](https://casco.com/blog/jev-cvss-benchmark) — 7th of 8 on severity scoring
