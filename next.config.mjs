/** @type {import('next').NextConfig} */
const nextConfig = {
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
  };
  
  export default nextConfig;
  