export interface HomePageQueryResult {
  allMdx: {
    edges: HomePageQueryResultEdge[]
  }
}

export interface HomePageQueryResultEdge {
  node: {
    frontmatter: {
      createdAt: string
      tags: string[]
      title: string
    }
    slug: string
  }
}
