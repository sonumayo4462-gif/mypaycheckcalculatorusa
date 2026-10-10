import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "mypaycheckcalculatorusa.com" }],
        destination: "https://www.mypaycheckcalculatorusa.com/:path*",
        permanent: true,
      },
      {
        source: "/texas-paycheck-calculator",
        destination: "/texas",
        permanent: true,
      },
      {
        source: "/california-paycheck-calculator",
        destination: "/california",
        permanent: true,
      },
      {
        source: "/florida-paycheck-calculator",
        destination: "/florida",
        permanent: true,
      },
      {
        source: "/new-york-paycheck-calculator",
        destination: "/new-york",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
