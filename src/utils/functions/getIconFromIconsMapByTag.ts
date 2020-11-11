export const getIconFromIconsMapByTag = (IconsMap: Map<string, FC>, tag: string): FC => {
  const base64EncodedSvgIcon = IconsMap.get(tag)

  if (base64EncodedSvgIcon === undefined) {
    throw new Error(`There is no icon for tag: ${tag}!`)
  }

  return base64EncodedSvgIcon
}
