const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');
const { mfMonorepoConfig } = require('../../libs/config/src');

module.exports = withModuleFederationPlugin({
  remotes: {
    baseApp1: 'http://localhost:4201/remoteEntry.js',
    baseApp2: 'http://localhost:4202/remoteEntry.js',
  },

  shared: {
    ...mfMonorepoConfig,
  },
});
