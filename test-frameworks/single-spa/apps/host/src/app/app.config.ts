import {ApplicationConfig} from '@angular/core';
import {provideRouter, RouteReuseStrategy} from '@angular/router';
import {appRoutes} from './app.routes';
import {getSingleSpaExtraProviders} from "single-spa-angular";
import {MicroFrontendRouteReuseStrategy} from "./host/route-reuse-strategy";
import {APP_BASE_HREF} from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [getSingleSpaExtraProviders(), provideRouter(appRoutes),
    { provide: APP_BASE_HREF, useValue: '/' },
    {
     provide: RouteReuseStrategy,
     useClass: MicroFrontendRouteReuseStrategy
}],
};
