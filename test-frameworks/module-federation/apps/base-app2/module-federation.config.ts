import { ModuleFederationConfig } from '@nx/webpack';

// const coreLibraries = new Set<string>(['@angular/core']);

const config: ModuleFederationConfig = {
  name: 'base-app2',
  exposes: {
    './Routes': 'apps/base-app2/src/app/remote-entry/entry.routes.ts',
  },
  // shared: (libraryName, defaultConfig) => {
  //   if (coreLibraries.has(libraryName)) {
  //     return defaultConfig;
  //   }
  //
  //   // Returning false means the library is not shared.
  //   return false;
  // },
};

export default config;
