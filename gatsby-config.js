module.exports = {
  siteMetadata: {
    title: `Cambridge University Fencing Club`,
    siteUrl: `https://www.cufencing.org.uk`,
    description: `Cambridge University Fencing Club`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cambridge University Fencing Club`,
        short_name: `CUFC`,
        start_url: `/`,
        background_color: `#2b2a2a`,
        theme_color: `#a3c1ad`,
        display: `standalone`,
        icon: `${__dirname}/src/images/logo.png`
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
    `gatsby-plugin-smoothscroll`
  ]
}
