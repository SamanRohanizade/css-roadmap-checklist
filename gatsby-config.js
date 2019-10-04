module.exports = {
  siteMetadata: {
    title: `CSS Roadmap Checklist`,
    description: `a roadmap for CSS Mastery`,
    author: `Saman Rohanizade`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `css-roadmap-checklist`,
        short_name: `css roadmap`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-root-import',
    `gatsby-plugin-offline`
  ],
}
