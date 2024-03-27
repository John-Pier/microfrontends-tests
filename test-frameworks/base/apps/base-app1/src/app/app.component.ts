import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HostHeaderComponent } from './host-header/host-header.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HostHeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'base-app1';
}
