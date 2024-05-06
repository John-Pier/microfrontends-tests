import { APP_INITIALIZER, ApplicationConfig, inject } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { appRoutes } from './app.routes';
import { MFService } from './microfrontends/microfrontend.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {
        const router = inject(Router);
        const mfService = inject(MFService);
        return mfService.initialise();
      },
    },
  ],
};
