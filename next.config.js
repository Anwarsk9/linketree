/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  env: {
    CLOUDINARY_API_URL: process.env.NEXT_PUBLIC_CLOUDINARY_API_URL,
    CLOUDINARY_PRESET_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME,
  },
};
module.exports = nextConfig;
