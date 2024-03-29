import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserData } from './model';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  loadUserData(): Observable<UserData> {
    return of<UserData>({
      name: 'Пепе',
      permissions: '123,123,123,1231,23,1231,23',
      avatarUrl: 'assets/img.png',
    }).pipe(delay(150));
  }
}
