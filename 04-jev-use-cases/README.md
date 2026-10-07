# Lesson 04 — Where Jev Fits: Four Categories of Use Cases

This lesson has no code. It covers when Jev is worth using, the four categories of Jev use cases, and public projects in each. Lesson 05 builds one example per category.

Jev is worth it when a **typed decision** repeats **at volume** or sits on a **hot path**, and its probability changes what your code does.

Most projects below are experiments or demos, not production systems. Numbers are each author's own measurements unless noted. Links checked 2026-10-06.

## 1. AI-Powered Workflows

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

## 2. Map-Reducing Big Data

Ask every record the same question, then aggregate the answers in code. Depends on Jev being cheap.

- [jev-ultralightspeed](https://github.com/collapseindex/jev-ultralightspeed) — pack many records per request; benchmarked on 30,000 judgments against human labels
- [Newsjack](https://github.com/elvisun/newsjack/tree/main/eval/jev-coarse-agreement) — keep, monitor, or reject news signals before research
- [pg-jev](https://github.com/realZachi/pg-jev) — Jev conditions inside PostgreSQL queries
- [commit-miner](https://github.com/devanshbatham/commit-miner) — label a repo's commits as bug fixes, security fixes, and change types
- [jev-curate](https://github.com/AkashPriyadarshii/jev-curate) — filter training datasets with typed rubrics
- [Jev Sift](https://github.com/kbhuw/jev-sift) — screen files and pages before an agent reads them

## 3. Real-Time Applications

Jev picks the next action inside a loop, under a latency budget. Depends on Jev being fast.

- [Browser Use jev-ultrafast](https://github.com/browser-use/jev-ultrafast) — Jev picks the browser operation and element; a small LLM writes text only when typing ([performance notes](https://github.com/browser-use/jev-ultrafast/blob/main/docs/performance.md))
- [minecraft-agent](https://github.com/rmalde/minecraft-agent) — a large model plans; Jev picks each Minecraft action
- [TypeSafe's Doom demo](https://typesafe.ai/blog/introducing-system-one-models-and-jev#fun-demos) — Jev plays Doom from structured game state
- [jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser) — act on spoken browser commands as speech arrives
- [Droidrun Mobile Jev](https://github.com/droidrun/mobile-jev) — operate Android apps
- [typesafe-computer-use](https://github.com/awlevin/typesafe-computer-use) — control a Mac through OCR and accessibility state

## 4. Verify Everything

Check outputs, claims, inputs, and tool calls. Code computes pass, review, or block. Cheap checks make it practical to check everything.

- [jevmod](https://github.com/ohernandezdev/jevmod) — moderation probabilities per category
- [Jev MCP `jev_verify`](https://github.com/jkudish/jev-mcp#jev_verify) — check claims against evidence; uncertain verdicts go to review
- [TypeSafe citation-check cookbook](https://docs.typesafe.ai/cookbooks/citation_check) — the same claim-checking pattern in Python
- [jev-injection-bench](https://github.com/ASEVlad/jev-injection-bench) — prompt-injection detection benchmark on public datasets
- [jev-edge](https://github.com/kiwi0719/jev-edge) — prompt-injection screening at an API gateway
- [jevc](https://github.com/doronp/jevc) — compile agent policies into narrow questions and allow / ask / deny gates
- [Foreman](https://github.com/thruwire/foreman) — supervise a coding agent: continue, steer, stop, or verify
- [Jev Review](https://github.com/devagrawal09/jev-review) — screen code changes for risk and missing tests
