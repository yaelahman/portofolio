/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true,
        domains: ['www.gravatar.com'],
    },
};

module.exports = nextConfig;
