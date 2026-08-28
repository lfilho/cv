import { cvData, cvKeywords } from '@components/cv/cvData';
import { getCareerTenure } from '@lib/career-tenure';

function stripHtml(html: string): string {
  return html
    .replace(/<strong>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    .replace(/<[^>]+>/g, '');
}

function processText(text: string): string {
  return stripHtml(text.replace(/\{\{CAREER_TENURE\}\}/g, String(getCareerTenure())));
}

function flattenDescription(items: (string | string[])[], depth = 0): string[] {
  const lines: string[] = [];

  for (const item of items) {
    if (Array.isArray(item)) {
      lines.push(...flattenDescription(item, depth + 1));
    } else {
      const prefix = depth > 0 ? `${'  '.repeat(depth - 1)}- ` : '';
      lines.push(`${prefix}${processText(item)}`);
    }
  }

  return lines;
}

function formatExperience(isVerbose: boolean): string {
  const entries = cvData.experience.softwareEngineering;
  const lines: string[] = ['## Experience', ''];

  for (const entry of entries) {
    const positions = entry.positions.join(' / ');
    lines.push(`### ${entry.company} — ${positions} (${entry.startDate} – ${entry.endDate})`, '');

    const descriptions = isVerbose || !entry.shortDescription?.length ? entry.description : entry.shortDescription;
    const flattened = flattenDescription(descriptions);
    if (flattened.length) {
      lines.push(...flattened, '');
    }
  }

  return lines.join('\n');
}

function formatEducation(): string {
  const lines: string[] = ['## Education', ''];

  for (const degree of cvData.education.academyCourses) {
    lines.push(`### ${degree.title}`, '');
    lines.push(`- ${degree.school}, ${degree.location} — ${degree.date}`);
    for (const info of degree.info) {
      lines.push(`- ${processText(info)}`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

function formatLanguages(): string {
  const lines: string[] = ['## Languages', ''];
  for (const language of cvData.languages) {
    lines.push(`- ${language.name}: ${language.level}`);
  }
  lines.push('');
  return lines.join('\n');
}

export function generateCvMarkdown(isVerbose = false): string {
  const { header } = cvData;
  const name = `${header.name.first} ${header.name.last}, ${header.name.title}`;
  const contact = header.contact;

  const lines: string[] = [
    `# ${name}`,
    '',
    `${header.location.city}, ${header.location.country}`,
    '',
    '## Contact',
    '',
    `- [${contact.email.display}](mailto:${contact.email.href})`,
    `- [${contact.linkedin.display}](${contact.linkedin.href})`,
    `- [${contact.github.display}](${contact.github.href})`,
    `- [${contact.speakerdeck.display}](${contact.speakerdeck.href})`,
    `- [${contact.topmate.display}](${contact.topmate.href})`,
    `- [${contact.url.display}](${contact.url.href})`,
    '',
    '## Introduction',
    '',
    ...header.introduction.map(processText),
    '',
    formatExperience(isVerbose),
    formatEducation(),
    formatLanguages(),
    '## Skills',
    '',
    cvKeywords.join(', '),
    '',
  ];

  return lines.join('\n');
}
