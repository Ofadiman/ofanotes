module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      options: {
        name: `notes`,
        path: `${__dirname}/src/pages/notes/`
      },
      resolve: `gatsby-source-filesystem`
    },
    {
      options: {
        rule: {
          include: /src\/assets/u
        }
      },
      resolve: 'gatsby-plugin-react-svg'
    },
    {
      options: {
        icon: 'favicon.svg',
        short_name: 'Ofanotes',
        start_url: '/'
      },
      resolve: 'gatsby-plugin-manifest'
    },
    {
      options: {
        allExtensions: true,
        isTSX: true,
        jsxPragma: 'React'
      },
      resolve: 'gatsby-plugin-typescript'
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-mdx'
  ],
  siteMetadata: {
    author: 'Ofadiman',
    description: 'Application for keeping notes and code snippets.',
    title: 'Ofanotes'
  }
}
