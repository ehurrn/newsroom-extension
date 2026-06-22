---
description: Launch an investigation — entity mapping, dependency tracing, OSINT, FOIA, and libel-proof documentation
argument-hint: "<topic, entity, or lead to investigate>"
---

# /investigate

Start or continue an investigative journalism workflow on the given topic.

Investigate: @$1

Load the `investigative-journalist` skill and follow its full framework — master file construction, structural dependency mapping, OSINT source inversion, FOIA engineering, corporate veil piercing, temporal anomaly sequencing, and zero-error defensive audit.

## Quick Reference

| Sub-skill | When to use |
|-----------|-------------|
| `muckraker-master-file` | First — initialize `master-file.json` (see `schemas/master-file.schema.json`) with entities, evidence, claims |
| `evidence-preservation-protocol` | Always loaded — write-once `evidence/` store, append-only collection log, legal hold |
| `evidence-grading` | Always loaded — shared Admiralty grading scale + publication rule for every claim |
| `subject-dossier-construction` | Run the full public-records sweep on each named subject; grade all evidence |
| `structural-dependency-mapping` | Trace indirect flows and tacit relationships |
| `osint-source-inversion` | Harvest public records, filings, registrations |
| `precision-foia-engineering` | Draft targeted FOIA/public records requests |
| `corporate-veil-piercing` | Map shell companies, beneficial ownership, nominee structures |
| `temporal-anomaly-sequencing` | Plot events on a timeline to surface suspicious patterns |
| `zero-error-defensive-audit` | Libel-proof the final product before publication |

## Agent Sub-Skill Routing Protocol

When executing this command string against the argument payload `@$1`, you must programmatically parse the target context and route through sub-skills using this strict conditional pipeline:

1. **Bootstrap Phase:** If `master-file.json` is missing or uninitialized in the session workspace, load and execute `muckraker-master-file` to initialize the relational registries.
2. **Preservation Gate:** Ensure `evidence-preservation-protocol` is actively active underneath the session turn before adding files to the workspace.
3. **Target Ingestion:** - If `@$1` specifies a named person, company, or vendor, immediately execute `subject-dossier-construction`.
   - If an entity uses hidden holding chains or mail-drops, execute `corporate-veil-piercing` to update nodes and edges.
4. **Relational Analysis:** If tracking policy anomalies, money pipelines, or PAC allocations, route to `structural-dependency-mapping` and cross-reference with `osint-source-inversion`.
5. **Timeline Phase:** If evaluating process sequencing, delays, or compressed contract formations, run `temporal-anomaly-sequencing`.
6. **Defense Pass:** Before generating a final written report or draft response for the user, pass the raw data payload through `zero-error-defensive-audit`.
