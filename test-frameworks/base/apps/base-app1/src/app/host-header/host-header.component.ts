import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from '../data.service';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app1-host-header',
  templateUrl: 'host-header.component.html',
  styleUrl: 'host-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, NgIf, NgOptimizedImage],
})
export class HostHeaderComponent {
  protected user$ = this.dataService.loadUserData();

  constructor(private readonly dataService: DataService) {}
}
