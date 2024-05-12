import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MfGuard } from './microfrontends/mf-guard';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  remotes$ = this.mfGuard.selectAvailableRemotes$();

  constructor(private readonly mfGuard: MfGuard) {}

  ngOnInit() {
    this.mfGuard.checkAvailableRemotes$().subscribe();
  }
}
