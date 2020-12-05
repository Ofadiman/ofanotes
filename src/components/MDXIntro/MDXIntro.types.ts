export interface MDXIntroQueryResult {
  allMdx: {
    edges: MDXIntroQueryResultEdge[]
  }
}

export interface MDXIntroQueryResultEdge {
  node: {
    frontmatter: {
      createdAt: string
      title: string
    }
    slug: string
    tableOfContents: {
      items: TableOfContentItem[]
    }
  }
}

export interface TableOfContentItem {
  title: string
  url: string
}
