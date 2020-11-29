export interface MDXHeadingOneProps {
  className?: string
}

export interface MDXHeadingOneQueryResult {
  allMdx: {
    edges: MDXHeadingOneQueryResultEdge[]
  }
}

export interface MDXHeadingOneQueryResultEdge {
  node: {
    frontmatter: {
      createdAt: string
      tags: string[]
      title: string
    }
    slug: string
  }
}
