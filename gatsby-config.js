require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  siteMetadata: {
    title: `Raxo`,
    description: `Branding - Design - Development`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `fuchsia`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        // This is the base url for the website, right now its pulling data from the env file
        baseUrl: `${process.env.GATSBY_WP_API_LINK}`,
        // This is the protocol used on the url for the website, right now its pulling data from the env file
        protocol: `${process.env.GATSBY_WP_PROTOCOL}`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
