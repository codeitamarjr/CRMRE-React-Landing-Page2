import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // assetPrefix: isProd ? '/CRMRE-Landing-Page2/' : '',
  // basePath: isProd ? '/CRMRE-Landing-Page2' : '',
  output: 'export',
};

export default nextConfig;
