# Lesson 09 — Ecosystem Showcase & Capstone Challenge

## The Decision Rubric

| Scenario | Tool / Tier | Typical Latency | USD / 1M Tokens |
|---|---|---|---|
| Exact string match, regex, UUID validation | **Deterministic Code** | <1ms | No model token fee; compute costs apply |
| Intent classification, guardrails, routing, safety gates | **System 1 (Jev)** | ~100ms – 250ms | $0.042 (Outputs Free) |
| Complex code gen, multi-step planning, long-form synthesis | **System 2 (LLMs)** | 2,000ms – 5,000ms+ | $2–$4 input; $10–$20 output |

Prices verified 2026-09-30: standard uncached API usage. GPT-6 Sol: $2 input / $10 output; Claude Opus 5.5: $4 input / $20 output; Jev: $0.042 input / $0 output. Jev latency is measured from a laptop in the earlier lessons; the other latencies are illustrative.

---

## Course Capstone Challenge

Build and deploy your own System 1 pipeline. Choose one of the three tracks:

- **Track A: Autonomous Support Triage Engine** — Ingest incoming tickets or webhooks, filter malicious payloads, trigger deterministic API actions for high-confidence items, and escalate edge cases.
- **Track B: Custom Pi Coding Agent Extension** — Build and test an interactive safety shield or subagent dispatcher for `@earendil-works/pi-coding-agent`.
- **Track C: Edge API Gateway Semantic Firewall** — Deploy a Cloudflare Worker or Fastly service that intercepts LLM queries and blocks prompt injections before they reach your LLM.

Share your implementation and benchmark results with the community on [Skool](https://www.skool.com/zazencodes-agentic-coding-club-7823)!
