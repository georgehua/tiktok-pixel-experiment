/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Ensures the app is exported as a static site
    basePath: '/tiktok-pixel-experiment', // Replace 'repository-name' with your GitHub repository name
    images: {
      unoptimized: true, // GitHub Pages does not support Next.js Image Optimization, so disable it
    },
    trailingSlash: true, // Ensures that each page is served with a trailing slash (for GitHub Pages)
  };
  
  export default nextConfig;