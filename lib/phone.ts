/**
 * Iranian mobile number helpers.
 * Accepts Persian (۰-۹) and Arabic (٠-٩) digits, spaces, dashes and parentheses,
 * and the prefixes 0, +98, 0098 and 98, e.g. "۰۹۱۲ ۳۴۵ ۶۷۸۹", "+98 912-345-6789".
 */

/** Operator prefixes are 09[0-9]x; the full number is 0 + 9 + 9 digits. */
export const IRANIAN_MOBILE_REGEX = /^(?:\+98|0098|98|0)?(9\d{9})$/;

/** Characters a user may type into the phone field (digits in any script, +, space, -, parentheses). */
export const PHONE_INPUT_ALLOWED = /[^0-9۰-۹٠-٩+\s\-()]/g;

export function toEnglishDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
}

/** Returns the number as 09XXXXXXXXX, or null when it is not a valid Iranian mobile. */
export function normalizeIranianMobile(value: string): string | null {
  const compact = toEnglishDigits(value).replace(/[\s\-()]/g, "");
  const match = compact.match(IRANIAN_MOBILE_REGEX);
  return match ? `0${match[1]}` : null;
}

export function validateIranianMobile(value: string): boolean {
  return normalizeIranianMobile(value) !== null;
}

/** Keeps only characters allowed in the phone field. */
export function sanitizePhoneInput(value: string): string {
  return value.replace(PHONE_INPUT_ALLOWED, "").slice(0, 18);
}
