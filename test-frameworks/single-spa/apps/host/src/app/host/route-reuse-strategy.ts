import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class MicroFrontendRouteReuseStrategy extends RouteReuseStrategy {
  shouldDetach(): boolean {
    // маршрут не сохраняется
    return false;
  }
  store(): void { }
  shouldAttach(): boolean {
    return false;
  }
  // время присоединения маршрута
  retrieve(): DetachedRouteHandle {
    return null!;
  }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    if (future.routeConfig === curr.routeConfig) {
      return true;
    }
    if(future.data?.['app']) {
      return future.data['app'] === curr.data['app']
    }

    return false;
  }
}
