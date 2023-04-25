/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    SECRET_KEY: process.env.SECRET_KEY
  }
}

module.exports = nextConfig
