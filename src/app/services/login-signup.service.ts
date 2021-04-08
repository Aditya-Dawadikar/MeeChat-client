import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from 'src/shared/user';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  constructor() { }

  public userSource$ = new BehaviorSubject('0');
  userObserver = this.userSource$.asObservable();

  //authUser:User;
  authUser:User={
    id:0,
    userName:"geekgod",
    avatar:"#",
    friends:[
      {
        friendName:"chandler",
        userId:1,
        chatId:0,
      },
      {
        friendName:"stillsingle",
        userId:2,
        chatId:1,
      }
    ],
    blocked:[
      {
        friendName:"abc",
        userId:11,
        chatId:0,
      },
      {
        friendName:"def",
        userId:12,
        chatId:0,
      }
    ]
  };

  setAuthUser(user:User){
    this.authUser=user;
  }

  getAuthUser(){
    return this.authUser;
  }

}
