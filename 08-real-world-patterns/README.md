# Lesson 08 — Real-World Production Patterns

1. `api_gateway_guardrail.py` — edge semantic firewall. Two `Noul` questions per request: spam (`>= 0.85` → HTTP 400) and prompt injection (`>= 0.75` → block and log). Clean requests go on to the backend LLM.
2. `ci_pr_evaluator.py` — CI quality gate. One `Score` on four described risk levels (0–3), mapped to a merge policy: `< 1.5` auto-merge, `< 2.5` peer review, otherwise security audit.

Verdicts are printed, not enforced.

## Run

Needs `TYPESAFE_API_KEY`.

```bash
uv run python 08-real-world-patterns/api_gateway_guardrail.py
uv run python 08-real-world-patterns/ci_pr_evaluator.py
```
