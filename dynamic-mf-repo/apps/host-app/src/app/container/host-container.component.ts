import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'host-container',
  templateUrl: 'host-container.component.html',
  styleUrl: 'host-container.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet],
})
export class HostContainerComponent {
  constructor() {}
}
