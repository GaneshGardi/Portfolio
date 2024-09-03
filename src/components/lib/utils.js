import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and merges conflicting Tailwind CSS classes using tailwind-merge.
 * @param {...(string|string[]|object)} inputs - Class names or objects to conditionally apply class names.
 * @returns {string} - The merged class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
