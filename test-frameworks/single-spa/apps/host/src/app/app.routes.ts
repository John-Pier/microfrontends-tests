import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'app1',
    children: [
      {
        path: '**',
        loadChildren: ( ) => import('./host/spa-host.module').then(m => m.SpaHostModule),
        data: { app: 'base-app1' }
      }
    ]
  },
  {
    path: 'app2',
    children: [
      {
        path: '**',
        loadChildren: ( ) => import('./host/spa-host.module').then(m => m.SpaHostModule),
        data: { app: 'base-app2' }
      }
    ]
  }
];
