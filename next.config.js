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
}

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
