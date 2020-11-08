module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
    {
      // options: {
      //   defaultLayouts: {
      //     default: require.resolve('./src/layout/Layout.tsx')
      //   }
      // },
      resolve: 'gatsby-plugin-mdx'
    }
  ],
  siteMetadata: {
    author: 'Ofadiman',
    description: 'Application for keeping notes and code snippets.',
    title: 'Ofanotes'
  }
}
