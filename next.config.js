const withSass = require('@zeit/next-sass')
const withFonts = require('nextjs-fonts')
const withImages = require('next-images')

module.exports = withSass(
  withFonts(
    withImages({
      webpack(config) {
        config.module.rules.push({
          test: /\*\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
            },
          },
        })
        return config
      },
    }),
  ),
)
