import { graphql, useStaticQuery } from 'gatsby'

interface SiteMetadata {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export const useSiteMetadata = (): SiteMetadata['site']['siteMetadata'] => {
  const queryResult: SiteMetadata = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return queryResult.site.siteMetadata
}
