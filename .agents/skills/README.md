# Agent Skills

Project skills for managing the CV, events, and travel map. They follow the open [Agent Skills specification](https://agentskills.io/specification), so any skills-compatible agent (Claude Code, GitHub Copilot/VS Code, Codex, Cursor, Gemini CLI, OpenCode, …) can discover and run them.

## Layout

```
.agents/skills/                    # Canonical; read by Codex, VS Code/Copilot, …
├── add-book/
│   └── SKILL.md
├── add-event/
│   └── SKILL.md
└── add-place/
    └── SKILL.md

.claude/skills/                    # Claude Code only scans here; symlinks avoid copies
├── add-book -> ../../.agents/skills/add-book
├── add-event -> ../../.agents/skills/add-event
└── add-place -> ../../.agents/skills/add-place
```

Claude Code follows the SKILL.md format but discovers skills only under `.claude/skills/` (project, personal, or plugin), so the per-skill symlinks keep one source of truth. Other clients scan `.agents/skills/` directly.

A skill is a directory containing at minimum a `SKILL.md` file. Optional `scripts/`, `references/`, and `assets/` subdirectories hold executable code, detailed documentation, and templates that agents load only when needed.

## SKILL.md format

Every `SKILL.md` starts with YAML frontmatter:

```yaml
---
name: add-book # required; lowercase a-z, 0-9, hyphens; must match the directory name
description: ... # required; max 1024 chars; say what it does and when to use it
---
```

Optional frontmatter fields: `license`, `compatibility` (max 500 chars), `metadata` (string map), and `allowed-tools` (experimental).

The Markdown body holds the procedure. Keep it focused and under 500 lines; move long reference material into `references/`.

## Available skills

| Skill       | Use when                                                                   |
| ----------- | -------------------------------------------------------------------------- |
| `add-book`  | Adding, logging, or including a book in the CV reading list                |
| `add-event` | Adding a conference, talk, meetup, or event to the CV relevant events list |
| `add-place` | Adding a city, landmark, or visited/lived place to the travel map          |

Agents select skills by matching their `description`; explicit `/skill-name` invocation is a client-specific shortcut, not part of the standard.

## Adding a skill

1. Create `.agents/skills/<skill-name>/SKILL.md` (kebab-case directory name).
2. Add `name` and `description` frontmatter; `name` must equal the directory name.
3. Write the procedure in the body, including when to use it, steps, examples, and error handling.
4. Validate:

   ```bash
   npx skills-ref validate .agents/skills/<skill-name>
   ```

5. Run `npm run lint` before committing.
