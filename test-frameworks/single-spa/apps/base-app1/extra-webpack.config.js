const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  return {
    ...singleSpaWebpackConfig,
    module: {
      ...singleSpaWebpackConfig.module,
      rules: [
        ...singleSpaWebpackConfig.module.rules,
        {
          parser: {
            system: false
          }
        }
      ]
    }
  };
};
