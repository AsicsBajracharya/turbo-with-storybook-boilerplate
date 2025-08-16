/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: [
    //   "@turbo-with-tailwind/design-system",
      "@repo/ui",
    ],
};

export default nextConfig;
