const MONTH_MAP: Record<string, number> = {
  jan: 1,
  feb: 2,
  mar: 3,
  apr: 4,
  may: 5,
  jun: 6,
  jul: 7,
  aug: 8,
  sep: 9,
  oct: 10,
  nov: 11,
  dec: 12,
};

/**
 * Convert a CV date string like "Oct 2023" or "present" into an ISO-8601 date.
 * For "present", returns the current date.
 * For start dates, uses the first day of the month.
 * For end dates, callers can pass `lastDayOfMonth: true` to get the last day.
 */
export function parseCvDate(dateStr: string, options: { lastDayOfMonth?: boolean } = {}): string {
  const normalized = dateStr.trim().toLowerCase();

  if (normalized === 'present') {
    return new Date().toISOString().split('T')[0];
  }

  const match = normalized.match(/^(\w{3})\s+(\d{4})$/);
  if (!match) {
    return '';
  }

  const monthName = match[1].toLowerCase();
  const year = parseInt(match[2], 10);
  const month = MONTH_MAP[monthName];

  if (!month || Number.isNaN(year)) {
    return '';
  }

  if (options.lastDayOfMonth) {
    const nextMonth = new Date(Date.UTC(year, month, 1));
    const lastDay = new Date(nextMonth.getTime() - 86400000);
    return lastDay.toISOString().split('T')[0];
  }

  return `${year}-${String(month).padStart(2, '0')}-01`;
}
