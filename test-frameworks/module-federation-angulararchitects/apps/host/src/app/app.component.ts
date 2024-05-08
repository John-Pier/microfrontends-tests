import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HostHeaderComponent } from '@angular-monorepo/common';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  standalone: true,
  imports: [RouterModule, HostHeaderComponent, HostHeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'host';

  constructor() {
    // loadRemoteModule({
    //   type: 'module',
    //   remoteEntry: 'http://localhost:4202/remoteEntry.js',
    //   exposedModule: './baseApp2Guard',
    // }).then((t) => {
    //   console.log(t);
    // });
  }
}
