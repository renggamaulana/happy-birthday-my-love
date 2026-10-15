/**
 * Safely calculates the number of days elapsed since a given start date.
 * Returns null if the date is missing, invalid, or in the future.
 */
export function calculateDaysTogether(startDateStr: string | null | undefined): number | null {
  if (!startDateStr || typeof startDateStr !== 'string' || startDateStr.trim() === '') {
    return null;
  }

  const parsed = new Date(startDateStr);
  if (isNaN(parsed.getTime())) {
    return null;
  }

  const now = new Date();
  // Normalize both dates to midnight UTC to avoid daylight saving or partial day skew
  const startUTC = Date.UTC(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
  const nowUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

  const diffTime = nowUTC - startUTC;
  if (diffTime < 0) {
    // Start date is in the future; hide counter rather than displaying fabricated or negative numbers
    return null;
  }

  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Formats a date string into an Indonesian or localized romantic format (e.g., "15 Oktober 2026").
 */
export function formatScrapbookDate(dateStr: string | null | undefined, locale = 'id-ID'): string | null {
  if (!dateStr) return null;
  const parsed = new Date(dateStr);
  if (isNaN(parsed.getTime())) return null;

  try {
    return new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(parsed);
  } catch {
    return null;
  }
}
