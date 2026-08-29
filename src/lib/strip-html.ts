import { getCareerTenure } from './career-tenure.ts';

export interface StripHtmlOptions {
  /**
   * Convert `<strong>text</strong>` to `**text**` instead of removing the tag.
   * Useful when producing Markdown output.
   */
  keepMarkdownBold?: boolean;
  /**
   * Convert `<a href="url">text</a>` to `[text](url)` instead of keeping only the link text.
   * Useful when producing Markdown output.
   */
  keepMarkdownLinks?: boolean;
  /** Replace `{{CAREER_TENURE}}` with the computed value. */
  replaceCareerTenure?: boolean;
  /** Collapse consecutive whitespace into a single space. */
  normalizeWhitespace?: boolean;
}

/**
 * Strip HTML tags from a string, with optional Markdown preservation and career-tenure replacement.
 *
 * Order of operations matters:
 * 1. Convert known semantic tags (strong, a) according to options.
 * 2. Remove any remaining tags.
 * 3. Replace career-tenure placeholder.
 * 4. Normalize whitespace if requested.
 */
export function stripHtml(html: string, options: StripHtmlOptions = {}): string {
  const {
    keepMarkdownBold = false,
    keepMarkdownLinks = false,
    replaceCareerTenure = false,
    normalizeWhitespace = false,
  } = options;

  let text = html;

  text = keepMarkdownBold ? text.replace(/<strong>(.*?)<\/strong>/gi, '**$1**') : text.replace(/<strong>(.*?)<\/strong>/gi, '$1');

  text = keepMarkdownLinks
    ? text.replace(/<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    : text.replace(/<a\s+href="[^"]+"[^>]*>(.*?)<\/a>/gi, '$1');

  text = text.replace(/<[^>]+>/g, '');

  if (replaceCareerTenure) {
    text = text.replace(/\{\{CAREER_TENURE\}\}/g, String(getCareerTenure()));
  }

  if (normalizeWhitespace) {
    text = text.replace(/\s+/g, ' ');
  }

  return text.trim();
}
