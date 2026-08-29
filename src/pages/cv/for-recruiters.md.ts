import type { APIRoute } from 'astro';
import { cvData } from '@components/cv/cvData';
import { getCareerTenure } from '@lib/career-tenure';
import { stripHtml } from '@lib/strip-html';

function formatList(items: string[]): string {
  return items.map(item => `- ${item}`).join('\n');
}

export const GET: APIRoute = () => {
  const recruiting = cvData.recruiting;
  const contact = cvData.header.contact;
  const introduction = cvData.header.introduction
    .map(text => stripHtml(text, { replaceCareerTenure: true, normalizeWhitespace: true }))
    .join(' ');

  const markdown = `# For Recruiters\n\nQuick facts and intent for HRIS systems, recruiting agents, and talent teams.\n\n## Current Role\n\n**${recruiting.currentTitleSnapshot}**\n\n${introduction}\n\n## What I'm Looking For\n\n- **Target roles:** ${recruiting.targetRoles.join(', ')}\n- **Target seniority:** ${recruiting.seniorityTarget}\n- **Preferred industries:** ${recruiting.preferredIndustries.join(', ')}\n- **Preferred locations:** ${recruiting.preferredLocations.join(', ')}\n- **Scope:** Strategic engineering leadership, scaling teams, improving processes, driving AI and developer experience transformation and effectiveness, shaping engineering strategy\n\n## Quick Facts\n\n- **Total experience:** ~${getCareerTenure()} years scaling teams and orgs across Coursera, AWS, startups, and government\n- **Recent scope:** Multi-team charters, org-wide process and AI transformation, enterprise revenue growth\n- **Leadership style:** People-centric, high retention, strong on DE&I and cross-functional collaboration\n- **Not looking for:** ${recruiting.notLookingFor.join(', ')}\n\n## Structured Data\n\n- **JSON Resume:** [/resume.json](/resume.json)\n- **CV (HTML):** [/cv](/cv)\n- **CV (PDF):** [/cv/pdf](/cv/pdf)\n\n## Contact\n\n- Email: [${contact.email.display}](${contact.email.href})\n- LinkedIn: [${contact.linkedin.display}](${contact.linkedin.href})\n- Booking: [${contact.topmate.display}](${contact.topmate.href})\n`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
