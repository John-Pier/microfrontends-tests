const {
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');
const { mfMonorepoConfig } = require('../../libs/config/src');

module.exports = withModuleFederationPlugin({
  name: 'base-app1',

  exposes: {
    './baseApp1': './apps/base-app1/src/app/app.component.ts',
  },

  shared: {
    ...mfMonorepoConfig,
  },
});
