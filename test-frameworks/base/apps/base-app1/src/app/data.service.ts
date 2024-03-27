import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { UserData } from './model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  loadUserData(): Observable<UserData> {
    return of<UserData>({
      name: 'Пепе',
      permissions: '123,123,123,1231,23,1231,23',
      avatarUrl: '/asets/img.png',
    }).pipe(delay(150));
  }
}
