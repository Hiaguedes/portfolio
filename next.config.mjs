/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['pt-BR', 'en-US'],
        defaultLocale: 'pt-BR',
        localeDetection: false,
    },
    images: {
        domains: ["placehold.co"]
    }
    
};

export default nextConfig;
