export const spacing = (spacingValue: number): string => {
  if (spacingValue < 0) {
    throw new Error('"spacingValue" cannot be below 0!')
  }

  if (!Number.isInteger(spacingValue)) {
    throw new TypeError('"spacingValue" must be an integer!')
  }

  const space = spacingValue * 4

  return `${space}px`
}
