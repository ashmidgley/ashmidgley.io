/** @type {import('next').NextConfig} */
const { withAxiom } = require("next-axiom");

const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = withAxiom(nextConfig);
