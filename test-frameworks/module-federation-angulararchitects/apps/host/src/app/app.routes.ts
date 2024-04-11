import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const appRoutes: Route[] = [
  {
    path: 'app1',
    loadComponent: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './baseApp1',
      }).then((m) => {
        console.log(m);
        return m['AppComponent'];
      });
    },
  },
  {
    path: 'app2',
    loadComponent: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './baseApp2',
      }).then((m) => m['AppComponent']);
    },
  },
];
