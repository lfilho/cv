# Add Book to CV

Add a book to your CV's reading list with intelligent categorization and validation.

## Usage

```
/add-book <book identifier>
```

Where `<book identifier>` can be:
- Book title (e.g., "Clean Code")
- URL to book page (Amazon, Goodreads, etc.)
- Path to screenshot containing book information
- ISBN number

## Behavior

When invoked, this skill will:

1. **Extract Book Information**
   - If a URL is provided: Fetch and parse the page for title, author, and description
   - If a screenshot is provided: Parse the image using vision capabilities to extract book details
   - If a title is provided: Search the web for the book to get accurate author name and full title
   - If an ISBN is provided: Look up the book details

2. **Validate the Book**
   - Confirm the book exists and information is accurate
   - Check for duplicates in the existing CV book lists
   - Alert if the book is already present

3. **Intelligent Categorization**
   - Analyze the book's subject matter based on title, description, and genre
   - Suggest whether it belongs in:
     - `software` - Technical books (programming, engineering, tools)
     - `softSkills` - Leadership, management, soft skills, personal development
   - Ask for user confirmation on categorization

4. **Format the Entry**
   - Properly format the book entry following existing conventions:
     - Detect if there's a subtitle and format accordingly
     - Handle multiple authors appropriately
     - Ensure consistent formatting with existing entries
   - Example formats:
     ```typescript
     { title: 'Clean Code', author: 'Robert C. Martin' }

     {
         title: 'Shape Up: ',
         subtitle: 'Stop Running in Circles and Ship Work that Matters',
         author: 'Ryan Singer'
     }

     {
         title: 'Head First: Design Patterns',
         author: 'E. Freeman, E. Robson, B. Bates, K. Sierra'
     }
     ```

5. **Show Proposed Changes**
   - Display the complete diff showing:
     - Which category the book will be added to
     - The formatted book entry
     - Where it will be inserted in the list (at the end of the category by default)
   - Show the line numbers for context

6. **Request User Approval**
   - Present the changes and ask for explicit confirmation
   - Options: "approve", "edit", "cancel"
   - If "edit" is selected, allow user to modify category, title, subtitle, or author

7. **Commit Changes**
   - If approved, use the Edit tool to add the book to `src/components/cv/cvData.ts`
   - Create a descriptive commit message:
     ```
     Add book to CV: [Title] by [Author]

     Category: [software|softSkills]

     https://claude.ai/code/session_[SESSION_ID]
     ```
   - Run `npm run lint` to ensure code formatting is correct

8. **Offer to Push**
   - After successful commit, ask if the user wants to push to the remote branch
   - If yes, execute: `git push -u origin <branch-name>`

## Important Notes

- **File Location**: Books are stored in `src/components/cv/cvData.ts`
- **Structure**:
  - Software books: `cvData.books.software[]` (lines ~966-1027)
  - Soft skills books: `cvData.books.softSkills[]` (lines ~1028-1189)
- **Formatting Rules**:
  - Titles with subtitles should have the main title end with `: ` (colon + space)
  - Multiple authors should be comma-separated: `'Author1, Author2, Author3'`
  - Maintain alphabetical or chronological order if specified
- **Linting**: Always run `npm run lint` before committing to maintain code quality
- **PDF Generation**: Remind user they may want to rebuild the CV PDF with `npm run build`

## Error Handling

- If book information cannot be found or validated, ask user to provide details manually
- If duplicate is detected, inform user and ask if they want to continue anyway
- If categorization is ambiguous, default to asking the user
- If web search/URL fetch fails, fall back to manual entry

## Examples

```bash
# Add by title
/add-book Atomic Habits

# Add by URL
/add-book https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882

# Add by screenshot
/add-book /path/to/screenshot.png

# Add by ISBN
/add-book 9780132350884
```

## Configuration

Default behavior can be customized:
- **Auto-push**: Set to `true` to automatically push after commit (default: `false`)
- **Auto-approve**: Set to `true` to skip approval step (default: `false`, not recommended)
- **Default category**: Set default category when ambiguous (default: `null`, always ask)
- **Sort order**: Keep insertion at end or sort alphabetically (default: `end`)
