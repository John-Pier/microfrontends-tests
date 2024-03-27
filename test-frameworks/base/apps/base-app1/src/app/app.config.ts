import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation],
    },
  ],
};
