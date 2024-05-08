const {
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');
const { mfMonorepoConfig } = require('../../libs/config/src');

module.exports = withModuleFederationPlugin({
  name: 'base-app2',

  exposes: {
    './baseApp2': './apps/base-app2/src/app/app.component.ts',
    './baseApp2Guard': './apps/base-app2/src/app/guard/index.ts',
  },

  shared: {
    ...mfMonorepoConfig,
  },
});
