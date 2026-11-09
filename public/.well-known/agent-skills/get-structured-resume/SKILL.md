---
name: get-structured-resume
description: Returns Luiz Gonzaga dos Santos Filho's resume in JSON Resume format from /resume.json. Use when an agent needs structured candidate data such as work history, education, or skills.
---

# Get structured resume

Returns Luiz Gonzaga dos Santos Filho's resume in JSON Resume format from `/resume.json`.

## Usage

Fetch `https://luiz.dev/resume.json` directly, or invoke the `get_site_info` WebMCP tool to discover the route.

## Output

A JSON Resume schema document with basics, work history, education, skills, languages, and recruiting preferences in the `meta` field.

## Example

```bash
curl -s https://luiz.dev/resume.json | jq '.basics.name, .work[0].name'
```
