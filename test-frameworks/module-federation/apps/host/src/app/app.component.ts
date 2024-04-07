import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HostHeaderComponent } from '@base-monorepo/common';

@Component({
  standalone: true,
  imports: [RouterModule, HostHeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'host';
}
