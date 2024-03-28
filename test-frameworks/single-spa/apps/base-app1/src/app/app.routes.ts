import { Route } from '@angular/router';
import {EmptyRouteComponent} from "./empty-route/empty-route.component";

export const appRoutes: Route[] = [
  {
    path: '**',
    component: EmptyRouteComponent,
  }
];
