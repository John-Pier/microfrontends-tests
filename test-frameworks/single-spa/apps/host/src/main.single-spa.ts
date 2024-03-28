import {enableProdMode, NgZone} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {singleSpaAngular} from 'single-spa-angular';
import {environment} from './environments/environment';
import {singleSpaPropsSubject} from './single-spa/single-spa-props';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "../../base-app1/src/app/app.component";
import {appConfig} from "../../base-app1/src/app/app.config";
import {PlatformLocation} from "@angular/common";

if (environment.production) {
  enableProdMode();
}


export const appId = 'container-app';

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return bootstrapApplication(AppComponent, appConfig)
      .then((ref) => {
        NgZone.isInAngularZone = () => {
          // @ts-ignore
          return window.Zone?.current?._properties[appId] === true;
        };

        const rootPlatformLocation = ref.injector.get(PlatformLocation) as any;
        const rootZone = ref.injector.get(NgZone);
        // tslint:disable-next-line:no-string-literal
        // @ts-ignore
        rootZone['_inner']._properties[appId] = true;
        rootPlatformLocation.setNgZone(rootZone);
        return ref;
      })
      .catch((err) => {
          console.error(err);
          return null!
        }
      );
  },
  template: '<app-root />',
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
//
// start();
