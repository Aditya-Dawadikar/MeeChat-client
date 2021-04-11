import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockUserService {

  constructor() { }

  private userSource = new Subject();
  userObserver = this.userSource.asObservable();

  blockUser(){
    this.userSource.next(true);
  }

}
