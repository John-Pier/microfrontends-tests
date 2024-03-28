import {Routes} from "@angular/router";
import {SpaUnmountGuard} from "./spa-unmount.guard";
import {SpaHostComponent} from "./spa-host.component";

export const spaRoutes: Routes = [{
  path: '',
  canDeactivate: [SpaUnmountGuard],
  component: SpaHostComponent,
}]
