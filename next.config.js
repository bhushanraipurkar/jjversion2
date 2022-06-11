/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    API_ROOT: process.env.API_ROOT,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    })
    return config
  },
}
