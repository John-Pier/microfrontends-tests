import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HostHeaderComponent } from '@angular-monorepo/common';

@Component({
  standalone: true,
  imports: [RouterModule, HostHeaderComponent, HostHeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'host';
}
