module.exports = (config) => {
  // Add your custom Dev Middleware configuration here
  config.watchOptions = {
    poll: 5000,
    aggregateTimeout: 300,
    ignored: ['node_modules'],
  };

  config.externals.push({
    canvas: 'commonjs canvas',
  });
  return config;
};
