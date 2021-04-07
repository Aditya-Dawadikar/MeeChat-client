import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { User } from 'src/shared/user';

@Injectable({
  providedIn: 'root'
})
export class LoadUserProfileService {

  constructor() { }

  private profileSource = new Subject();
  profileObserver = this.profileSource.asObservable();

  loadUserProfile(user:User){
    this.profileSource.next(user);
  }

}
