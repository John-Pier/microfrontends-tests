import {ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import {getSingleSpaExtraProviders} from "single-spa-angular";

export const appConfig: ApplicationConfig = {
  providers: [
    getSingleSpaExtraProviders(),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation],
    },
  ],
};
