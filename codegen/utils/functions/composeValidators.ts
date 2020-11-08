/**
 * This function is supposed to be used in plop generator.
 * It takes validator creators, calls every validator function with the current prompt value and returns the first error.
 */
export const composeValidators = (...validatorFunctions: ((promptValue: string) => boolean | string)[]) => (
  promptValue: string
): boolean | string => {
  const validationErrors: string[] = []

  validatorFunctions.forEach((validatorFunction) => {
    const validationResult = validatorFunction(promptValue)

    if (typeof validationResult === 'string') {
      validationErrors.push(validationResult)
    }
  })

  /**
   * If `validationErrors` array has some validation error return the first error.
   */
  return validationErrors.length === 0 ? true : validationErrors[0]
}
