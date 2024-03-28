import {Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {SingleSpaService} from './single-spa.service';

@Component({
  standalone: true,
  selector: 'app-spa-host',
  template: '<div #appContainer></div>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpaHostComponent implements OnInit {


  @ViewChild('appContainer', {static: true})
  appContainerRef: ElementRef | undefined


  appName!: string;

  constructor(private singleSpaService: SingleSpaService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // тащим название подгружаемой карты
    this.appName = this.route.snapshot.data['app'];
    this.mount().subscribe();
  }

  // собираем наш подгруженный проект по выбранному роут
  mount(): Observable<unknown> {
    return this.singleSpaService.mount(this.appName, this.appContainerRef?.nativeElement);
  }

  // разбираем
  unmount(): Observable<unknown> {
    return this.singleSpaService.unmount(this.appName);
  }
}
