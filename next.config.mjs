/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/dictionaries",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
