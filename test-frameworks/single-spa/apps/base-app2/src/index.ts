import { registerApplication, start } from 'single-spa';
import { bootstrap, mount, unmount } from './main.single-spa';

registerApplication(
  'base-app2',
  () => import('./main.single-spa'),
  () => true,
  { bootstrap, mount, unmount }
);

start();
