---
name: evidence-grading
description: The single shared standard for grading evidence and deciding what is publishable. Every desk that touches sourcing — investigation, defensive audit, final editor review — uses this scale and this publication rule, so a confidence call made at one desk maps cleanly to the Master File schema and to every other desk.
---

# Evidence Grading

## Why One Scale

Before this reference, different desks rated sourcing differently — "HIGH/MEDIUM/LOW," "PRIMARY/SECONDARY/TERTIARY," checkmarks. Those don't map to each other or to `evidence[].reliability`/`credibility` in [`schemas/master-file.schema.json`](schemas/master-file.schema.json), so a strong call at the research desk turned into a guess at the legal desk. **There is now one scale.** Grade once, at intake; every later desk reads the same grade.

## The Admiralty Scale (two axes, graded independently)

Every evidence item gets a **letter** (how reliable is the *source*) and a **number** (how credible is *this specific information*). They are independent — a usually-reliable registry (B) can still carry a one-off clerical error (3).

**Source reliability (the letter):**

| Grade | Meaning | Typical example |
|-------|---------|-----------------|
| **A** | Completely reliable | Certified official record; court-stamped filing; SEC EDGAR original |
| **B** | Usually reliable | State registry export; established outlet's primary-document reporting |
| **C** | Fairly reliable | Trade press; named source with partial track record |
| **D** | Not usually reliable | Anonymous tip; partisan blog |
| **E** | Unreliable | Source with a demonstrated motive to deceive |
| **F** | Cannot be judged | New source, no track record |

**Information credibility (the number):**

| Grade | Meaning |
|-------|---------|
| **1** | Confirmed by independent sources |
| **2** | Probably true (consistent with other known facts) |
| **3** | Possibly true (plausible, not yet corroborated) |
| **4** | Doubtful (tension with known facts) |
| **5** | Improbable (contradicts known facts) |
| **6** | Cannot be judged |

A subject's own sworn filing is an **A-grade source against that subject** (a statement against interest). Two outlets repeating the same wire story are **one** source, not two.

## Mapping Legacy Terms

If you think in the old vocabularies, convert — don't run them in parallel:

| Old term | Admiralty equivalent | Publishable? |
|----------|----------------------|--------------|
| PRIMARY / HIGH / ✓✓✓ | A1–A2, or B1 | Yes |
| SECONDARY / MEDIUM / ✓✓ | B2–C2 | Only if a second independent source raises it to corroborated |
| TERTIARY / LOW / ✓ | C3 and below, D–F | No — do not publish |

## The Publication Rule (one rule, every desk)

A claim is publishable (`claims[].publishable: true`) only when **either**:

- it is **corroborated by two independent sources** (independent = different origin, not two retellings of one origin), **or**
- it rests on a **single A1 or A2 source** — a certified/official primary record.

Everything else stays `unconfirmed` or `single-source` in the Master File and may not appear in a draft as fact. It can appear as an attributed, hedged statement *only* with the subject's response included.

## The Defamation-Risk Gate

Independent of grade, rate each claim's `defamation_risk`:

- **high** — imputes crime, fraud, or professional incompetence to an identifiable living person or active company. Requires legal review **and** a documented right-of-reply (`comment_requested: true`) before it may enter a draft.
- **medium** — reputationally negative but not crime-level.
- **low / none** — neutral or favorable.

A well-graded claim can still be high-risk. Grade answers "is it true enough to publish?"; the risk gate answers "what protection does publishing it require?" Both must pass.

---

**Used by:** `muckraker-master-file` (intake grading), `subject-dossier-construction` (sweep grading), `zero-error-defensive-audit` (draft audit), `final-editor-review` (publication greenlight). When any of those skills says "grade the evidence" or "is this publishable," it means *this* scale and *this* rule.
