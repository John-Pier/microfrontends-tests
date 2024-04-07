import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'base-app1',
  exposes: {
    './Routes': 'apps/base-app1/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
