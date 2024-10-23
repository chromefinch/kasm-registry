/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Chromefinch',
    description: 'idk man, i suck at this',
    icon: '/img/logo.svg',
    listUrl: 'https://chromefinch.github.io/kasm_registry',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
