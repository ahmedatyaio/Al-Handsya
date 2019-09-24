const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Al-Handsya for Construction and Real Estate`,
    description: `Al-Handsya is a leading construction and real estate company based in Cairo, EG`,
    author: `@alhandsya`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['source sans pro:600', 'montserrat:700,900'],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#fdd835'
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'k19op1wz0xk8',
        accessToken: '47Cn2zW9mzWrZc2N52fZGMJUOhHAXXGylwaY5MXKzDY'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    }
  ]
};
