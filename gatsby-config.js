// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-eslint',
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_NAME,
        previews: false,
        omitPrismicScript: true,
        sharpKeys: [
          /image|photo|picture/, // (default)
          'logo',
          'icon_logo',
          'my_image',
        ],
        // pages: [
        //   {
        //     type: 'Blog',
        //     match: '/:uid',
        //     path: '/',
        //     component: require.resolve('./src/templates/blog.js'),
        //   },
        // ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || false,
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.your-website.com',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          components: 'src/components',
          modules: 'src/modules',
          images: 'src/images',
          utils: 'src/utils',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      // options: {
      //   devMode: true,
      //   analyzerMode: 'server',
      //   analyzerPort: 3001,
      //   defaultSizes: 'gzip',
      // },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
