/** @type {import('next').NextConfig} */


const isProd = process.env.NODE_ENV === 'production';
const repoName = 'tiktok-pixel-experiment';  // Replace with your GitHub repo name

const nextConfig = {
    output: 'export', // Ensures the app is exported as a static site
    reactStrictMode: true,
    assetPrefix: isProd ? `/${repoName}/` : '',
    basePath: isProd ? `/${repoName}` : '',
    
    images: {
      unoptimized: true, // GitHub Pages does not support Next.js Image Optimization, so disable it
    },
    trailingSlash: true, // Ensures that each page is served with a trailing slash (for GitHub Pages)
  };
  
  export default nextConfig;