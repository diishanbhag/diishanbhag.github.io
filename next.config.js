module.exports = {
  // Use the export option instead of the exportPathMap function
  // exportPathMap: function() {
  //   return {
  //     '/': { page: '/' }
  //   };
  // }
  output: 'export', // Use the 'export' option for static HTML export
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/source'
    });

    return config;
  }
};
