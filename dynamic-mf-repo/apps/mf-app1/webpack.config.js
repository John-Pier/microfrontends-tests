const {
  withModuleFederationPlugin,
  share,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mf-app1',
  exposes: {
    './App': './exposed/app/index.ts',
    './Guard': './exposed/guard/app.guard.ts',
  },
  shared: {
    ...share({
      '@angular/core': {
        singleton: true,
        includeSecondaries: true,
        strictVersion: true,
        requiredVersion: '>=17',
      },
      '@angular/common': {
        singleton: true,
        strictVersion: true,
        requiredVersion: '>=17',
      },
      '@angular/common/http': {
        singleton: true,
        strictVersion: true,
        requiredVersion: '>=17',
        includeSecondaries: {
          skip: ['@angular/http/testing'],
        },
      },
      '@angular/router': {
        singleton: true,
        strictVersion: true,
        requiredVersion: '>=17',
      },
      '@angular/forms': {
        singleton: true,
        strictVersion: true,
        requiredVersion: '>=17',
      },
      '@angular/platform-browser': {
        singleton: true,
        strictVersion: true,
        requiredVersion: '>=17',
      },
      '@angular/platform-browser-dynamic': {
        singleton: true,
        strictVersion: true,
        requiredVersion: '>=17',
      },
      rxjs: {
        singleton: true,
        strictVersion: true,
        requiredVersion: '^7.8.0',
      },
      '@nx/angular': {
        singleton: true,
        strictVersion: true,
        requiredVersion: '>=18',
      },
    }),
  },
});
