# Skill: Match candidate to role

## Description

Given a job description, return a fit assessment for Luiz Gonzaga dos Santos Filho as a candidate, including an overall score, relevant experience, matched skills, and honest concerns.

## Usage

Invoke the `match_role` tool via WebMCP with a `jobDescription` string.

## Input

```json
{
  "jobDescription": "Director of Engineering to lead platform and AI teams..."
}
```

## Output

```json
{
  "overallFit": 8,
  "relevantExperience": [...],
  "matchedSkills": ["leadership", "ai", "developer experience"],
  "concerns": ["No prior director-title role listed"]
}
```

## Notes

- Fit scores are heuristic and based on keyword overlap.
- Concerns are framed honestly;
