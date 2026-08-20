# CerminDiri

**A population-calibrated metabolic and cardiovascular risk screener for Malaysians — zero backend, single HTML file, no lab results required to start.**

🔗 **Live:** [cermindiri.aufthority.com](https://cermindiri.aufthority.com)
🏗️ **Built by:** [Aufthority](https://www.aufthority.com) — evidence-based digital health tools for Malaysians

---

## The problem

Most consumer health-risk calculators are built on Western reference populations — BMI cutoffs, waist circumference thresholds, and cardiovascular risk equations derived from American or European cohorts. Applied to Malaysians and other Southeast Asians, these thresholds systematically under-flag risk: body composition and disease onset at a given BMI differ meaningfully between populations.

CerminDiri swaps in WHO Asia-Pacific BMI cutoffs and population-validated risk instruments, and discloses exactly where each number comes from — including where the evidence is strong and where it's a calibrated estimate rather than a statistically derived one.

## What it does

CerminDiri runs a two-tier screen:

**Tier 1 — No lab results needed**
Anthropometric and lifestyle inputs only (age, sex, height, weight, waist, activity, diet, family history, smoking):

| Metric | What it measures |
|---|---|
| BMI | Asia-Pacific cutoffs, age-adjusted (18–59 / 60–69 / 70+) |
| Waist circumference & WHtR | Central/abdominal obesity |
| ABSI (A Body Shape Index) | Body shape independent of BMI |
| Conicity Index | Abdominal fat distribution |
| BAI (Body Adiposity Index) | Estimated body fat from hip/height, where hip data is provided |
| FINDRISC | 10-year type 2 diabetes risk (0–26 point score) |
| INTERHEART NL-IHRS | Non-lab modifiable cardiovascular risk factors |
| Composite index (0–100) | Blended metabolic/cardiovascular risk summary |

**Tier 2 — Have lab results?**
Add systolic blood pressure to unlock:

| Metric | What it measures |
|---|---|
| Framingham Risk Score (BMI version) | 10-year cardiovascular event probability — D'Agostino et al. (2008), validated in a Malaysian population by Selvarajah et al. (2014) |

Results are shown against a live population-distribution scatter (filterable by sex and age band), so a user sees not just their own score but where it sits relative to others — with tier-specific, actionable recommendations rendered per risk level.

## Design principles

- **Evidence integrity over polish.** Every formula and threshold is disclosed in-app with its source. Age-based BMI threshold shifts (60–69, 70+) and under-18 caveats are surfaced explicitly rather than silently applied.
- **Calibrated, not invented.** Where population-specific data doesn't exist for a given metric, that gap is stated rather than papered over with a Western default presented as if it were locally derived.
- **No lab results as the default path.** Tier 1 works from measurements anyone can take at home; Tier 2 is additive, not required.
- **Bilingual by default.** Full English / Bahasa Malaysia toggle, not machine-translated — copy is written and reviewed in both languages.

## Tech stack

- **Zero backend** — single static `index.html`, no server-side runtime, no database
- Vanilla JS, no framework
- [Chart.js](https://www.chartjs.org/) (CDN) for the population scatter and dial visualizations
- [Umami Cloud](https://umami.is/) for privacy-respecting analytics
- **Deploy pipeline:** GitHub → Vercel (auto-deploy) → Cloudflare DNS

This is a deliberate architectural constraint across the Aufthority tool suite: every tool ships as a single portable file with no infrastructure to maintain, which keeps the whole product line running on effectively zero hosting cost.

## Sources

- WHO Asia-Pacific BMI classification
- D'Agostino RB et al. (2008) — Framingham general cardiovascular risk profile
- Selvarajah S et al. (2014) — Framingham risk score validation in a Malaysian population
- FINDRISC (Finnish Diabetes Risk Score)
- INTERHEART non-laboratory risk score

## Disclaimer

CerminDiri is an informational screening tool, not a diagnostic instrument. It does not replace professional medical advice, and users with elevated risk scores are directed to seek clinical follow-up rather than treating results as a diagnosis.

## Part of the Aufthority ecosystem

CerminDiri is one of several Malaysia-calibrated health tools under [Aufthority](https://www.aufthority.com), including [MyTDEE](https://mytdee.aufthority.com) (calorie needs) and [VO2max](https://vo2max.aufthority.com) (cardiorespiratory fitness estimation) — all built on the same static-first, evidence-disclosed architecture.
