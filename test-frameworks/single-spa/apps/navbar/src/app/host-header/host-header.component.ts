import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'navbar-host-header',
  templateUrl: 'host-header.component.html',
  styleUrls: ['host-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostHeaderComponent {
   user$ = this.dataService.loadUserData();

  constructor(private readonly dataService: DataService) {}
}
