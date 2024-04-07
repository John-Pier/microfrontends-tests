import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'base-app2',
  exposes: {
    './Routes': 'apps/base-app2/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
