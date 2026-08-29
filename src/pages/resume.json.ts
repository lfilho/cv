import type { APIRoute } from 'astro';
import { cvData } from '@components/cv/cvData';
import { getCareerTenure } from '@lib/career-tenure';
import { parseCvDate } from '@lib/parse-cv-dates';
import { stripHtml } from '@lib/strip-html';

function flattenDescription(description: (string | string[])[]): string[] {
  const flattened = description.flat();
  return flattened.map(text => stripHtml(text, { replaceCareerTenure: true })).filter(Boolean);
}

function buildProfiles() {
  const contact = cvData.header.contact;
  const profiles = [
    { network: 'LinkedIn', url: contact.linkedin.href, username: 'luizgonzaga' },
    { network: 'GitHub', url: contact.github.href, username: 'lfilho' },
    { network: 'SpeakerDeck', url: contact.speakerdeck.href, username: 'lfilho' },
    { network: 'Topmate', url: contact.topmate.href, username: 'luizgonzaga' },
  ];
  return profiles;
}

function buildWork() {
  return cvData.experience.softwareEngineering.map(job => {
    const positions = job.positions;
    const title = positions[positions.length - 1] || 'Engineering Leader';
    const highlights = flattenDescription(job.shortDescription);
    const summaryLines = flattenDescription(job.description);

    return {
      name: job.company,
      position: title,
      url: undefined,
      startDate: parseCvDate(job.startDate),
      endDate: parseCvDate(job.endDate, { lastDayOfMonth: true }) || undefined,
      summary: summaryLines.slice(0, 3).join(' '), // concise summary
      highlights,
      keywords: job.keywords,
    };
  });
}

function buildVolunteer() {
  return cvData.experience.volunteer.map(entry => ({
    organization: entry.organization,
    position: entry.position,
    url: undefined,
    startDate: '',
    endDate: '',
    summary: `${entry.position} at ${entry.organization} (${entry.location}, ${entry.date})`,
    highlights: [],
    keywords: entry.keywords,
  }));
}

function buildEducation() {
  return cvData.education.academyCourses.map(degree => ({
    institution: degree.school,
    url: undefined,
    area: Array.isArray(degree.title) ? degree.title.join(' ') : degree.title,
    studyType: '',
    startDate: '',
    endDate: degree.date,
    score: '',
    courses: degree.info,
  }));
}

function buildSkills() {
  // Bucket keywords into high-level categories based on simple keyword matching.
  const keywords = cvData.header.introduction
    .concat(...cvData.experience.softwareEngineering.map(j => j.keywords))
    .join(' ')
    .toLowerCase();

  const buckets = [
    { name: 'Engineering Leadership', terms: ['leadership', 'mentoring', 'coaching', 'hiring', 'team management', 'org design'] },
    {
      name: 'Engineering Management',
      terms: ['delivery management', 'project management', 'budgeting', 'vendor relationship', 'stakeholder'],
    },
    {
      name: 'AI & Developer Experience',
      terms: ['ai', 'developer experience', 'devops', 'continuous integration', 'documentation'],
    },
    {
      name: 'Product & Strategy',
      terms: ['product development', 'product launch', 'organizational strategy', 'process improvement', 'revenue growth'],
    },
    {
      name: 'Collaboration & Culture',
      terms: ['cross-functional', 'remote collaboration', 'de&i', 'public speaking', 'postmortem'],
    },
  ];

  return buckets.map(bucket => {
    const matched = bucket.terms.filter(term => keywords.includes(term));
    return {
      name: bucket.name,
      level: '',
      keywords: matched,
    };
  });
}

export const GET: APIRoute = () => {
  const header = cvData.header;
  const recruiting = cvData.recruiting;

  const resume = {
    basics: {
      name: `${header.name.first} ${header.name.last}, ${header.name.title}`,
      label: 'Engineering Leader',
      image: '',
      email: header.contact.email.href,
      phone: header.contact.phone.formatted,
      url: header.contact.url.href,
      summary: stripHtml(header.introduction.join(' ')),
      location: {
        city: header.location.city,
        countryCode: header.location.country,
      },
      profiles: buildProfiles(),
    },
    work: buildWork(),
    volunteer: buildVolunteer(),
    education: buildEducation(),
    skills: buildSkills(),
    languages: cvData.languages,
    interests: [],
    references: [],
    projects: [],
    publications: [],
    awards: [],
    certificates: [],
    // Recruiting-specific metadata appended as a JSON Resume meta extension.
    meta: {
      targetRoles: recruiting.targetRoles,
      preferredIndustries: recruiting.preferredIndustries,
      preferredLocations: recruiting.preferredLocations,
      seniorityTarget: recruiting.seniorityTarget,
      openToOpportunities: recruiting.openToOpportunities,
      availabilityNote: recruiting.availabilityNote,
      notLookingFor: recruiting.notLookingFor,
    },
  };

  return new Response(JSON.stringify(resume, null, 2), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
