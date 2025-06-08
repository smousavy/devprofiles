import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["robohash.org", "cdn.multiavatar.com"],
    /* domains: ["cdn.multiavatar.com", "api.multiavatar.com"], */
  },
};

export default nextConfig;
