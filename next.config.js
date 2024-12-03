// const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = ({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.bridge.jo',
        port: '',
        pathname: '/**', // You can specify allowed paths if needed
      },
    ],
  },
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "en",
  },
  reactStrictMode: false,
});

module.exports = nextConfig;