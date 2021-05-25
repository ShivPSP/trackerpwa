const siteMetadata = {

  title: `Gatsby Default Starter`,
  description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  author: `@gatsbyjs`,
  favicon: `./static/favicon.svg`,
  backgroundColor: `#f7f0eb`,
  themeColor: `#a2466c`,
}


module.exports = {
  siteMetadata: siteMetadata,
  plugins: [

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TrackerApp`,
        short_name: `Ta`,
        start_url: `/`,
        background_color: siteMetadata.backgroundColor,
        theme_color: siteMetadata.themeColor,
        display: `minimal-ui`,
        icon: siteMetadata.favicon // This path is relative to the root of the site.
      },
    },



    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/tracker/`],
      },
    },

  ],
}