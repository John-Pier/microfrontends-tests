import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host',
  remotes: ['base-app1', 'base-app2'],
};

export default config;
