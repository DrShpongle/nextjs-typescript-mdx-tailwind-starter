/** @type {import('next').NextConfig} */
const withPlugins = require(`next-compose-plugins`)
const withMDX = require(`@next/mdx`)({
  extension: /\.mdx?$/,
  options: {},
})

const nextConfig = {
  reactStrictMode: true,
  experimental: {esmExternals: false},
  images: {
    domains: ['images.unsplash.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440],
  },
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  // webpack(config, {isServer, defaultLoaders}) {
  //   if (!isServer) {
  //     config.resolve.fallback.fs = false
  //   }
  //   config.module.rules.push({
  //     test: /\.mdx?$/,
  //     use: [
  //       defaultLoaders.babel,
  //       {
  //         loader: '@mdx-js/loader',
  //         /** @type {import('@mdx-js/loader').Options} */
  //         options: {
  //           /* jsxImportSource: …, otherOptions… */

  //         },
  //       },
  //     ],
  //   })
  //   return config
  // },
}

// module.exports = withPlugins([], nextConfig)

module.exports = withPlugins(
  [
    withMDX({
      pageExtensions: [`ts`, `tsx`, `mdx`],
      remarkPlugins: [],
      rehypePlugins: [],
    }),
  ],
  nextConfig,
)
