import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMenuServiceService {

  constructor() { }

  private _userMenuSource = new Subject<any>();
  userMenuSource$ = this._userMenuSource.asObservable();

  toggle(){
    this._userMenuSource.next();
  }

}
