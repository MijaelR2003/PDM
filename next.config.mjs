/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   dynamic: "force-dynamic", // Esto forzará la renderización dinámica
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
