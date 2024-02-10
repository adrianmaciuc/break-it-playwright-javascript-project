import { HomePage } from "../pages/home.page";
/**
 * Navigates to the home page and generates a random number between 0 and max (exclusive).
 * @param {Object} homePage - The object representing the home page.
 * @param {number} max - The upper limit for the random number.
 * @returns {Promise<number>} - A promise that resolves to a random number.
 */
export async function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
