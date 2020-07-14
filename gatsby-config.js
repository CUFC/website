module.exports = {
  siteMetadata: {
    title: `Cambridge University Fencing Club`,
    siteUrl: `https://www.cufencing.org.uk`,
    description: `Cambridge University Fencing Club`,
    titleTemplate: "%s · CUFC",
    description:
      "CUFC, the official fencing club of the University of Cambridge, is one of the longest running fencing clubs in the country having been founded in 1896.",
    image: "cufc_trinity.jpg",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `EB Garamond`,
          `Source Sans Pro` 
        ],
        display: 'swap',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`
  ]
}
