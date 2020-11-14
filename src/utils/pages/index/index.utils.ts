import { HomePageQueryResultEdge } from './index.types'

export const filterMenuItems = (regex: RegExp, edges: HomePageQueryResultEdge[]): HomePageQueryResultEdge[] =>
  edges.filter(({ node }) => regex.test(node.frontmatter.title))
