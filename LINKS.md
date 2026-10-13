# Links

Links from the lessons that have no code: primary sources for Lesson 02, the use-case catalog from Lesson 04, and the projects shown in Lesson 07.

## Lesson 02 — What Is Jev? TypeSafe & RLCD

Who built Jev, how TypeSafe trains it with RLCD (Reinforcement Learning for Calibrated Decisions), and what TypeSafe has and hasn't published about the model.

### Primary Sources

- [Introducing System One Models & Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) — TypeSafe's launch post
- [System One models](https://docs.typesafe.ai/concepts/system-one) — TypeSafe docs
- [Confidence](https://docs.typesafe.ai/confidence) — how TypeSafe computes the `confidence` value
- [Jev: System One models for Prod, not God](https://www.latent.space/p/jev) — Latent Space interview with Diogo Almeida

## Lesson 04 — Where Jev Fits: Four Categories of Use Cases

When Jev is worth using, the four categories of Jev use cases, and public projects in each. Lesson 05 builds one example per category.

Jev is worth it when a **typed decision** repeats **at volume** or sits on a **hot path**, and its probability changes what your code does.

Most projects below are experiments or demos, not production systems. Numbers are each author's own measurements unless noted. Links checked 2026-10-06.

### 1. AI-Powered Workflows

Jev makes a judgment call inside a workflow. Code routes, acts, or escalates.

- [OpenRouter Jev Router](https://openrouter.ai/typesafe/jev-router) — Jev picks the model and reasoning effort for each request
- [Trau case study](https://trau.sh/blog/typesafe-jev-case-study) — one request per ticket drives model routing, lesson recall, duplicate hints, and stall detection
- [Hermes Jev Skills](https://github.com/kerpopule/hermes-jev-skills) — model tier per agent turn, and skill selection across 377 skills
- [AgentScope](https://github.com/agentscope-ai/agentscope) — `JevClassifierModel` picks the chat model for each reply
- [TypeSafe invoice eval](https://evals.typesafe.ai/invoice_processing) — pay, hold, or route an invoice (TypeSafe's eval)
- [jev-claim-processor](https://github.com/akhilkoduriak/jev-claim-processor) — approve, deny, or escalate insurance claims (demo data)
- [Jev Search](https://github.com/superagents-lab/jev-search) — pick sources and time ranges, then rank search results
- [dsh-memory-jev](https://github.com/Towzai/dsh-memory-jev) — does a new memory supersede an old one?
- [jev-agent-skill-router](https://github.com/godsboy/jev-agent-skill-router) — pick a skill, no skill, or human review
- [Jev Recall](https://github.com/samdotmak/jev-recall) — keep only the memories that help this turn
- [Kyoto tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier) — label each tax page with its IRS form
- [DocJev](https://github.com/jerryjliu/docjev) — classify documents and split PDF packets
- [TypeSafe customer-service eval](https://evals.typesafe.ai/customer_service) — next action on a support turn (TypeSafe's eval)
- [jevmail](https://github.com/fazlerocks/jevmail) — email triage
- [Jev MCP `jev_extract`](https://github.com/jkudish/jev-mcp#jev_extract) — regex finds candidate values; Jev picks the right one
- [neo4jev](https://github.com/jexp/neo4jev) — navigate a knowledge graph one relationship at a time
- [jev-gtm-cookbook](https://github.com/bcharleson/jev-gtm-cookbook) — lead scoring and routing

### 2. Map-Reducing Big Data

Ask every record the same question, then aggregate the answers in code. Depends on Jev being cheap.

- [jev-ultralightspeed](https://github.com/collapseindex/jev-ultralightspeed) — pack many records per request; benchmarked on 30,000 judgments against human labels
- [Newsjack](https://github.com/elvisun/newsjack/tree/main/eval/jev-coarse-agreement) — keep, monitor, or reject news signals before research
- [pg-jev](https://github.com/realZachi/pg-jev) — Jev conditions inside PostgreSQL queries
- [commit-miner](https://github.com/devanshbatham/commit-miner) — label a repo's commits as bug fixes, security fixes, and change types
- [jev-curate](https://github.com/AkashPriyadarshii/jev-curate) — filter training datasets with typed rubrics
- [Jev Sift](https://github.com/kbhuw/jev-sift) — screen files and pages before an agent reads them

### 3. Real-Time Applications

Jev picks the next action inside a loop, under a latency budget. Depends on Jev being fast.

- [Browser Use jev-ultrafast](https://github.com/browser-use/jev-ultrafast) — Jev picks the browser operation and element; a small LLM writes text only when typing ([performance notes](https://github.com/browser-use/jev-ultrafast/blob/main/docs/performance.md))
- [minecraft-agent](https://github.com/rmalde/minecraft-agent) — a large model plans; Jev picks each Minecraft action
- [TypeSafe's Doom demo](https://typesafe.ai/blog/introducing-system-one-models-and-jev#fun-demos) — Jev plays Doom from structured game state
- [jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser) — act on spoken browser commands as speech arrives
- [Droidrun Mobile Jev](https://github.com/droidrun/mobile-jev) — operate Android apps
- [typesafe-computer-use](https://github.com/awlevin/typesafe-computer-use) — control a Mac through OCR and accessibility state

### 4. Verify Everything

Check outputs, claims, inputs, and tool calls. Code computes pass, review, or block. Cheap checks make it practical to check everything.

- [jevmod](https://github.com/ohernandezdev/jevmod) — moderation probabilities per category
- [Jev MCP `jev_verify`](https://github.com/jkudish/jev-mcp#jev_verify) — check claims against evidence; uncertain verdicts go to review
- [TypeSafe citation-check cookbook](https://docs.typesafe.ai/cookbooks/citation_check) — the same claim-checking pattern in Python
- [jev-injection-bench](https://github.com/ASEVlad/jev-injection-bench) — prompt-injection detection benchmark on public datasets
- [jev-edge](https://github.com/kiwi0719/jev-edge) — prompt-injection screening at an API gateway
- [jevc](https://github.com/doronp/jevc) — compile agent policies into narrow questions and allow / ask / deny gates
- [Foreman](https://github.com/thruwire/foreman) — supervise a coding agent: continue, steer, stop, or verify
- [Jev Review](https://github.com/devagrawal09/jev-review) — screen code changes for risk and missing tests

## Lesson 07 — Jev in the Wild

Real projects built with Jev in its first three weeks, one per slide, grouped by the four categories from Lesson 04.

Numbers are each project's own measurements unless noted, and most come from small samples. Links checked 2026-10-07.

### 1. AI-Powered Workflows

- [Pi `jev-router.ts`](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/examples/extensions/jev-router.ts) — Pi's built-in Jev router: plans on a strong model, then hands implementation to a cheap one
- [Unblocked](https://getunblocked.com/blog/jev-in-production-vs-cross-encoder/) — in production, Jev decides which saved notes reach the agent, replacing a cross-encoder
- [Entagl](https://www.entagl.com/blog/typesafe-jev-benchmark-ai-decision-models) — 13 support-agent decisions benchmarked against Gemini, with a calibration chart
- [DocJev](https://github.com/jerryjliu/docjev) — classify documents and split PDF packets
- [Hermes Jev Skills](https://github.com/kerpopule/hermes-jev-skills) — pick the model for each agent turn, plus skill selection and screening
- [Jev Recall](https://github.com/samdotmak/jev-recall) — keep only the memories that matter for this request

### 2. Map-Reducing Big Data

- [MotherDuck `prompt_jev()`](https://motherduck.com/blog/motherduck-supports-jev/) — a SQL function that labels a text column
- [Sure](https://github.com/we-promise/sure/pull/3660) — categorize bank transactions in an open-source finance app, with a confidence threshold
- [jev-ultralightspeed](https://github.com/collapseindex/jev-ultralightspeed) — pack many records into one Jev request
- [jevgrep](https://github.com/dzhng/jevgrep) — find the relevant code before a coding agent reads it

### 3. Real-Time Applications

- [Jev Pong](https://jev-pong.ably.dev) — Jev and chat models play Pong; the ball moves once per decision
- [Browser Use jev-ultrafast](https://github.com/browser-use/jev-ultrafast) — Jev picks each browser action and element
- [Droidrun Mobile Jev](https://github.com/droidrun/mobile-jev) — drive a real Android phone
- [jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser) — act on spoken browser commands as speech arrives
- [Jev Plays Pokémon Red](https://github.com/christianmat/jev-pokemon) — Jev makes every decision in a full playthrough

### 4. Verify Everything

- [Firecrawl safe search](https://github.com/firecrawl/firecrawl/pull/4865) — drop adult results from web search
- [jev-edge](https://github.com/kiwi0719/jev-edge) — prompt-injection screening at an API gateway
- [jevc](https://github.com/doronp/jevc) — compile agent rules into narrow questions and a verdict in code
- [Pi Auto Mode](https://github.com/counterposition/pi/tree/main/packages/pi-auto-mode) — approve routine Pi tool calls automatically, and ask before risky ones

### Benchmarks

- [JevBench](https://github.com/fstandhartinger/jevbench) — an independent benchmark of Jev and open-weights decision models ([live board](https://benchmarkheaven.com/jev-models))

### Where Jev Lost

Measured and not adopted, or beaten:

- [Hermes Agent compaction scorecard](https://github.com/NousResearch/hermes-agent/blob/main/evals/compaction/results/SCORECARD-2026-09-19-jev.md) — "Do not adopt Jev" for context compaction
- [World Monitor](https://github.com/koala73/worldmonitor/pull/8625) — Jev kept in shadow mode for news alert labels
- [Red Hat guardrail benchmark](https://developers.redhat.com/articles/2026/10/02/benchmarking-ai-decision-models-against-traditional-guardrails) — 1st on content safety, 4th on prompt injection
- [Casco CVSS benchmark](https://casco.com/blog/jev-cvss-benchmark) — 7th of 8 on severity scoring
