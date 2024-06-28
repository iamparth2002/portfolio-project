/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
    images: {
        domains: ['img.clerk.com','firebasestorage.googleapis.com'],
      },
};

export default nextConfig;
