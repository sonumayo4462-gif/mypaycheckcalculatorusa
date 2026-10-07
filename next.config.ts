import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
