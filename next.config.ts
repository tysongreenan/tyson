import type { NextConfig } from "next";

/** Low-risk security headers (modern-web-guidance `security`). Vercel already sends HSTS. */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "object-src 'none'; base-uri 'none'; frame-ancestors 'none'" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      // Pages only: keep the MCP endpoint and llms.txt free of opener policy so any client can use them.
      {
        source: "/((?!mcp|llms\\.txt).*)",
        headers: [{ key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" }],
      },
    ];
  },
};

export default nextConfig;
