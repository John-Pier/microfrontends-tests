import {registerApplication, start} from "single-spa";
import {appId, bootstrap, mount, unmount} from "./main.single-spa";

registerApplication(
  appId,
  () => import('./main.single-spa'),
  () => true,
  { bootstrap, mount, unmount }
);

start();
