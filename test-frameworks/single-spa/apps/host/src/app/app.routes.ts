import { Route } from '@angular/router';
import {EmptyRouteComponent} from "./empty-route/empty-route.component";

export const appRoutes: Route[] = [
  {
    path: 'app1',
    children: [
      {
        path: '**',
        loadChildren: ( ) => import('./host/routes').then(m => m.spaRoutes),
        data: { app: 'base-app1' }
      }
    ]
  },
  {
    path: 'app2',
    children: [
      {
        path: '**',
        loadChildren: ( ) => import('./host/routes').then(m => m.spaRoutes),
        data: { app: 'base-app2' }
      }
    ]
  },
  { path: '**', component: EmptyRouteComponent }
];
