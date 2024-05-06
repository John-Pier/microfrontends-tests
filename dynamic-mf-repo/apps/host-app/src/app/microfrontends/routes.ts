import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { CustomManifest } from './models';
import { appRoutes } from '../app.routes';
import { HostContainerComponent } from '../container/host-container.component';

export function buildRoutes(options: CustomManifest): Routes {
  const lazyRoutes: Routes = Object.keys(options).map((key) => {
    const entry = options[key];
    return {
      path: entry.routePath,
      loadChildren: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: key,
          exposedModule: entry.exposedModule,
        }).then((m) => m[entry.ngModuleName]),
    };
  });

  return [
    ...appRoutes,
    {
      component: HostContainerComponent,
      children: [...lazyRoutes],
    },
  ];
}
