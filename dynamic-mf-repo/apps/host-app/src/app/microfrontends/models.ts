import { Manifest, RemoteConfig } from '@angular-architects/module-federation';
import { CanActivateFn, MaybeAsync, Route } from '@angular/router';

export type CustomRemoteConfig = RemoteConfig & {
  exposedModule: string;
  displayName: string;
  routePath: string;
  ngModuleName: string;
};

export type CustomManifest = Manifest<CustomRemoteConfig>;

export type MfEagerGuard =
  | {
      type: 'eager';
      canMatch: (route: Route) => MaybeAsync<boolean>;
    }
  | {
      type: 'lazy';
      canMatch: CanActivateFn;
    };
