"""CI quality gate: score each PR diff's risk with Jev and map the score to a merge policy."""

from typesafe_sdk import Score, TypeSafeClient

PULL_REQUESTS = [
    {
        "number": 142,
        "title": "Fix padding on navigation bar button",
        "diff": "- padding: 8px;\n+ padding: 12px;",
    },
    {
        "number": 143,
        "title": "Rewrite invoice date parsing",
        "diff": "- due = datetime.strptime(raw, '%Y-%m-%d')\n+ due = parse_date_fuzzy(raw)",
    },
    {
        "number": 144,
        "title": "Refactor billing webhook signature validation",
        "diff": "- if verify_stripe_signature(payload, sig):\n+ # Temporary bypass for testing\n+ if True:",
    },
]

RISK = Score(
    instructions="How risky is merging the change in `diff` (titled `title`)?",
    criteria=[
        "Safe: cosmetic or docs change, no effect on behavior",
        "Low: small behavior change, easy to roll back",
        "Moderate: changes core logic or config that could break things",
        "High: weakens security, auth, payments, or data integrity",
    ],
)


def policy(score: float) -> str:
    if score < 1.5:
        return "✅ auto-merge"
    if score < 2.5:
        return "👀 peer review"
    return "⛔ security audit"


def main():
    client = TypeSafeClient()
    for pr in PULL_REQUESTS:
        response = client.system_one(
            state={"title": pr["title"], "diff": pr["diff"]},
            questions={"risk": RISK},
        )
        risk = response.answers["risk"]
        print(f"PR #{pr['number']} {pr['title']}")
        print(f"  risk {risk.score:.2f} / 3 (confidence {risk.confidence:.2f}) → {policy(risk.score)}\n")


if __name__ == "__main__":
    main()
