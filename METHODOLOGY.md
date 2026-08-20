# Methodology & Evidence Tiering — CerminDiri

This document exists so a reviewer — clinical, technical, or otherwise — can see exactly what each number in CerminDiri is based on, and how confident that basis is. It follows the same three-tier system used across the Aufthority tool suite:

- **Measured** — statistically derived from a population dataset, ideally Malaysian/Southeast Asian
- **Proxy** — a validated instrument or formula from another population, applied here without local re-derivation
- **Design-calibration** — a threshold or weighting chosen deliberately by the builder where no statistically derived value exists, disclosed as such rather than presented as measured

> **Status: draft, pending author review.** The tier assigned to each metric below reflects what's verifiable from the current codebase and cited sources. Several are marked *unconfirmed* because I don't have documentation of a Malaysia-specific validation study for that instrument — these need the author's sign-off (or correction) before this doc is treated as authoritative.

---

## Tier 1 — Anthropometric & lifestyle (no lab results)

| Metric | Formula / instrument | Tier | Basis |
|---|---|---|---|
| BMI classification | WHO Asia-Pacific cutoffs, age-adjusted (18–59 / 60–69 / 70+) | **Measured** | Asia-Pacific cutoffs are a population-derived WHO regional standard, not a Western default |
| Waist circumference | Standard central obesity thresholds | **Measured** | Established population thresholds |
| WHtR | Waist-to-height ratio | **Measured** | Widely validated cross-population screening ratio |
| ABSI (A Body Shape Index) | Krakauer & Krakauer formula | **Proxy** *(unconfirmed)* | Formula is population-agnostic by design; no Malaysia-specific validation documented here — needs confirmation |
| Conicity Index | Valdez formula | **Proxy** *(unconfirmed)* | Same as above |
| BAI (Body Adiposity Index) | Hip/height-based estimate, shown when hip data provided | **Proxy** *(unconfirmed)* | Originally derived on Mexican-American and African-American cohorts; no SEA-specific validation identified |
| FINDRISC | Finnish Diabetes Risk Score (0–26) | **Proxy** *(unconfirmed)* | Originally Finnish-derived; used here as a risk-stratification instrument, not statistically re-derived for Malaysia — **needs author confirmation of any regional validation literature** |
| INTERHEART NL-IHRS | Non-lab modifiable risk score | **Proxy** *(unconfirmed)* | The original INTERHEART study had multi-regional (including Asian) recruitment, which may support a stronger tier than "proxy" — **needs author confirmation of which INTERHEART validation this cites** |
| Composite risk index (0–100) | Blended summary across above metrics | **Design-calibration** | Blending weights are a deliberate design choice, not a statistically fitted composite |

## Tier 2 — With lab results

| Metric | Formula / instrument | Tier | Basis |
|---|---|---|---|
| Framingham Risk Score (BMI version) | D'Agostino et al. (2008) | **Measured** | Validated specifically in a Malaysian population by Selvarajah et al. (2014) — the strongest evidence basis in the tool |

---

## Known gaps, disclosed rather than hidden

- No Malaysia/SEA-specific derivation exists for ABSI, Conicity, BAI, FINDRISC, or INTERHEART NL-IHRS as implemented here. They are used because they are the best available validated instruments, not because they were built on local data.
- The composite 0–100 index is a design-calibration convenience for interpretability. It should not be read as a clinically validated single number.
- Age-based BMI threshold shifts (60–69, 70+) follow published geriatric BMI guidance; the under-18 flag exists because none of the above instruments are calibrated for minors.

## Open items before this doc is finalized

1. Confirm or correct the tier for FINDRISC and INTERHEART NL-IHRS — is there a regional/Asian validation study this implementation actually relies on?
2. Confirm ABSI/Conicity/BAI tiering — same question.
3. Cross-check this against whatever tier decisions already exist in the in-app methodology accordion, so the two don't drift out of sync.
