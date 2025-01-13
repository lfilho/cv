export function getCareerTenure(): number {
    const CAREER_START_YEAR = 2003;
    const today: Date = new Date();
    const currentYear: number = today.getFullYear();
    const currentMonth: number = today.getMonth() + 1;
    const fractionalYear: number = currentMonth > 6 ? 0.5 : 0;

    return currentYear + fractionalYear - CAREER_START_YEAR;
} 