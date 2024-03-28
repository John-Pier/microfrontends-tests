import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {appRoutes} from './app.routes';
import {getSingleSpaExtraProviders} from "single-spa-angular";

export const appConfig: ApplicationConfig = {
  providers: [getSingleSpaExtraProviders(), provideRouter(appRoutes)],
};
