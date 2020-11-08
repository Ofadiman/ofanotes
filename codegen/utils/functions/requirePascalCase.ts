const pascalCaseRegex = /^[A-Z][A-Za-z]*$/u

/**
 * Utility function for plop generator.
 */
export const requirePascalCase = (errorMessage: string) => (promptValue: string): boolean | string =>
  pascalCaseRegex.test(promptValue) ? true : errorMessage
