const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/ky233466",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|mov|webm|ogg)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;
