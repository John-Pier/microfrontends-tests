import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  remotes: [
    ['base-app1', 'http://localhost:4201'],
    ['base-app2', 'http://localhost:4202'],
  ],
});
