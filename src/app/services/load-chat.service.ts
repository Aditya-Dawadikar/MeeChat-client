import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { User } from 'src/shared/user';

@Injectable({
  providedIn: 'root'
})
export class LoadChatService {

  user:User;
  private _friendChatSource = new Subject<User>();
  friendUser$ = this._friendChatSource.asObservable();

  constructor() {
  }

  openChat(user:User){
    this._friendChatSource.next(user);
  }

}
