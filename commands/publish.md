---
description: Safe single-article deployment to production with pre-flight checklist
argument-hint: "<article file to publish>"
---

# /publish

Deploy a single approved article to production.

Publish: @$1

Load the `publish-article` skill. File-by-file deployment only — never recursive, never wildcard. Run the pre-deployment checklist, target exact files, verify post-deployment, and prepare rollback procedure.

For multi-part series, use `/publish-series` instead.
