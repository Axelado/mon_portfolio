import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges multiple class values into a single string and eliminates duplicates.
 *
 * @param {...ClassValue[]} inputs - An array of class values which could be strings, arrays, or objects.
 * @return {string} - A single merged string of class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Formats the given datetime value into a localized date string.
 *
 * @param {any} datetime - The datetime value to be formatted. This can be any value that can be parsed by the JavaScript Date object.
 * @returns {string} - A string representing the formatted date in 'en-US' locale, displaying the year and short month.
 */
export const formatDatetime = (datetime: any) => {
  const d = new Date(datetime);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
};

/**
 * Prefixes a path with the deployed base URL so links work on subpath hosts (e.g. GitHub Pages).
 */
export const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL || '/';

  if (!path || path === '/') {
    return base;
  }

  const baseClean = base === '/' ? '' : base.replace(/\/$/, '');
  const pathClean = path.startsWith('/') ? path.slice(1) : path;

  return `${baseClean}/${pathClean}`;
};