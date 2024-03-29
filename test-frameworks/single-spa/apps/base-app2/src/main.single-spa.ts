import { enableProdMode, NgZone } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { singleSpaAngular } from 'single-spa-angular';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../../base-app1/src/app/app.component';
import { appConfig } from '../../base-app1/src/app/app.config';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);
    return bootstrapApplication(AppComponent, appConfig).catch((err) => {
      console.error(err);
      return null!;
    });
  },
  template: '<app2-root />',
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
