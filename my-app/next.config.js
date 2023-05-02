/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    async redirects() {
        return [
            // 예전에 사용된 페이지 같은 경우 처리하기 좋음 (SEO 측면)
            {
                source: '/products/deleted_forever',
                destination: '/products',
                permanent: true, // 영원히
            },
            {
                source: '/products/deleted_temp',
                destination: '/products',
                permanent: false, // 일시적 이동
            },
        ];
    },
    async rewrites() {
        return [
            // 대체 개념
            {
                source: '/bang',
                destination: '/about/me/bang',
            },
            {
                source: '/items/:slug',
                destination: '/products/:slug',
            },
        ];
    },
};

module.exports = nextConfig;
