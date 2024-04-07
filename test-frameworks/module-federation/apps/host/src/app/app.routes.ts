import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'base-app2',
    loadChildren: () => import('base-app2/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'base-app1',
    loadChildren: () => import('base-app1/Routes').then((m) => m.remoteRoutes),
  },
];
