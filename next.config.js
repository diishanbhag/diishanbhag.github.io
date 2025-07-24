module.exports = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/source',
    });
    return config;
  },
};
