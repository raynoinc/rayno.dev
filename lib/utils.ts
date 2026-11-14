import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Validate Iranian mobile phone number
 * Accepts formats: 09123456789, +989123456789, 9123456789
 * Also accepts Persian/Farsi digits
 */
export function validateIranianMobile(phone: string): boolean {
  // Convert Persian/Arabic digits to English
  const normalized = phone
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString())
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString())
    .trim();

  // Remove +98 prefix if present
  const cleaned = normalized.replace(/^\+98/, "0").replace(/^98/, "0");

  // Iranian mobile numbers: 09XX XXXXXXX (11 digits starting with 09)
  const mobileRegex = /^09\d{9}$/;
  return mobileRegex.test(cleaned);
}

/**
 * Format phone number for display (LTR)
 */
export function formatPhoneNumber(phone: string): string {
  const normalized = phone
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString())
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString())
    .replace(/\s/g, "");

  return normalized;
}
