import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation(config);

// const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
//
// export default  withModuleFederationPlugin({
//   remotes: {
//     'mfe1': "http://localhost:4201/remoteEntry.js"
//   },
//   shared: shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
//   sharedMappings: ['@demo/auth-lib'],
// });
