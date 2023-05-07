/**
 * Greets the user with a personalized message.
 * @param name - The name of the user.
 * @returns A greeting message with the user's name and a friendly message.
 *
 * @example
 * ```
 * const greeting = greet("John");
 * console.log(greeting); // Output: "Welcome John 👋. Hope you're having a great day ahead."
 * ```
 */
export const greet = (name: string): string =>
  `Welcome ${name} 👋. Hope you're having a great day ahead.`;
