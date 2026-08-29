# Skill: Get structured resume

## Description

Returns Luiz Gonzaga dos Santos Filho's resume in JSON Resume format from `/resume.json`.

## Usage

Fetch `https://luiz.dev/resume.json` directly, or invoke the `get_site_info` WebMCP tool to discover the route.

## Output

A JSON Resume schema document with basics, work history, education, skills, languages, and recruiting preferences in the `meta` field.

## Example

```bash
curl -s https://luiz.dev/resume.json | jq '.basics.name, .work[0].name'
```
