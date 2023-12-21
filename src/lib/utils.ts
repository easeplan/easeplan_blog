import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\- ]+/g, "") // Remove non-word chars
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

export function calculateReadTime(
  text: string,
  wordsPerMinute: number = 200
): number {
  const words = text.split(/\s+/);
  const numberOfWords = words.length;
  const readTime = numberOfWords / wordsPerMinute;
  // Round up to the nearest minute if there are any remaining words
  return Math.ceil(readTime);
}

// // Example usage:
// const sampleText: string = `
// The quick brown fox jumps over the lazy dog. This sentence contains every single letter of the alphabet,
// which makes it a pangram. Pangrams are used to display typefaces and test equipment. They're also fun for practicing
// handwriting, calligraphy, and keyboarding. In typography, using a pangram to display font characters is known as a 
// 'font sample'.
// `;

// // Calculate read time
// const readTimeMinutes: number = calculateReadTime(sampleText, 200);
// console.log(`Estimated read time: ${readTimeMinutes} minute(s)`);
