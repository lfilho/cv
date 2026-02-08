interface Name {
    first: string;
    last: string;
    title: string;
}

interface Location {
    city: string;
    country: string;
}

interface URL {
    href: string;
    display: string;
}

interface Contact {
    phone: { raw: string; formatted: string };
    url: URL;
    email: URL;
    linkedin: URL;
    twitter?: URL;
    topmate: URL;
    speakerdeck: URL;
    github: URL;
}

interface SpeakingXp extends Event {
    venue: string;
}

interface ProfessionalXp {
    startDate: string;
    endDate: string;
    company: string;
    positions: string[];
    keywords: string[];
    shortDescription: (string | string[])[];
    description: (string | string[])[];
}

interface VolunteerXp {
    date: string;
    location: string;
    organization: string;
    position: string;
    keywords: string[];
}

interface Experience {}

interface Degree extends Event {
    school: string;
    info: string[];
}

interface Course {
    title: string;
    school: string;
    date: string;
    duration: number;
}

interface Event {
    title: string | string[];
    location: string;
    date: string;
}

interface Language {
    name: string;
    level: string;
}

interface Book {
    title: string;
    subtitle?: string;
    author: string;
}

export default interface CVData {
    [key: string];
    header: {
        name: Name;
        location: Location;
        contact: Contact;
        introduction: string[];
    };
    experience: {
        softwareEngineering: ProfessionalXp[];
        instructorOrSpeaker: SpeakingXp[];
        volunteer: VolunteerXp[];
    };
    education: {
        academyCourses: Degree[];
        relevantCourses: Course[];
        relevantEvents: Event[];
    };
    languages: Language[];
    noteworthy: string[];
    books: {
        software: Book[];
        softSkills: Book[];
    };
}
