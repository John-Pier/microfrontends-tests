import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CustomManifest, CustomRemoteConfig } from './models';
import { getManifest } from '@angular-architects/module-federation';
import { buildRoutes } from './routes';

@Injectable({ providedIn: 'root' })
export class MFService {
  remotes?: CustomRemoteConfig[];

  constructor(private router: Router) {}

  initialise(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const manifest = getManifest<CustomManifest>();

      const routes = buildRoutes(manifest);
      this.router.resetConfig(routes);

      this.remotes = Object.values(manifest);
      resolve();
    });
  }
}
