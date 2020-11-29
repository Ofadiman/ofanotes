export interface TableOfContentsProps {
  className?: string
}

export interface TableOfContentsQueryResult {
  allMdx: {
    edges: TableOfContentsQueryResultEdge[]
  }
}

interface TableOfContentsQueryResultEdge {
  node: {
    slug: string
    tableOfContents: {
      items: { items: Items[] }[]
    }
  }
}

interface Items {
  title: string
  url: string
}
