# Claude Skills for CV Project

This directory contains custom skills for managing the CV project.

## Available Skills

### `/add-book` - Add Book to CV Reading List

Intelligently add books to your CV with automatic validation, categorization, and formatting.

**Features:**

- Web search for accurate book information
- Screenshot parsing for book details
- URL fetching from book websites
- Duplicate detection
- Intelligent categorization (software vs soft skills)
- Proper formatting with subtitle handling
- User approval workflow
- Automatic commit generation
- Optional push to remote

**Usage:**

```bash
/add-book <book title | URL | screenshot path | ISBN>
```

**Examples:**

```bash
/add-book Atomic Habits
/add-book https://www.amazon.com/dp/0132350882
/add-book ~/Downloads/book-screenshot.png
/add-book 9780132350884
```

See `add-book.md` for detailed documentation.

## Creating New Skills

To create a new skill:

1. Create a new `.md` file in this directory
2. Name it with kebab-case (e.g., `my-skill.md`)
3. Document the skill's purpose, usage, and behavior
4. The skill can be invoked with `/my-skill`

## Notes

- Skills are invoked using the `/skill-name` syntax
- Skills have access to all tools and context
- Keep skills focused on specific, repeatable tasks
- Document all expected inputs and outputs
