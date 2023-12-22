// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true, images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com',
      pathname: '**',
    },
    {
      protocol: 'https',
      hostname: 'capitalrollup-core-api-prod.onrender.com',
      pathname: '**',
    },
    {
      protocol:'https',
      hostname:'hackmd.io',
      pathname:'**'
    }
  ],
}, }

module.exports = nextConfig