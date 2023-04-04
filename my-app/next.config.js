/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "images.unsplash.com",
            },
        ],
    },
};

module.exports = nextConfig;
