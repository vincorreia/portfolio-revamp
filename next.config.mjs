/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["via.placeholder.com", "user-images.githubusercontent.com", "raw.githubusercontent.com"],
  },
};

export default nextConfig;
