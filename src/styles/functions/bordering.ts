export const bordering = (borderingValue: number): string => {
  if (borderingValue < 0) {
    throw new Error('"borderingValue" cannot be below 0!')
  }

  if (!Number.isInteger(borderingValue)) {
    throw new TypeError('"borderingValue" must be an integer!')
  }

  const border = borderingValue * 4

  return `${border}px`
}
