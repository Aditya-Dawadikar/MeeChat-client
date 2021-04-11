import { Component, OnInit, Output } from '@angular/core';
import {User} from 'src/shared/user';
import { users } from 'src/shared/Mock data/users';
import { Friend } from 'src/shared/friend';

import {LoadChatService} from 'src/app/services/load-chat.service';
import {LoginSignupService} from 'src/app/services/login-signup.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  user:User;
  friends:Friend[];

  constructor(
    private loadChatServiceObject:LoadChatService,
    private getUserObject:LoginSignupService
    ) {}

  ngOnInit(): void {
    //this.user = users[0];
    this.user=this.getUserObject.getAuthUser();
    this.friends=this.user.friends;
  }

  loadChat(friend:Friend){
    let friendUser:User;
    for(let i=0;i<users.length;i++){
      if(users[i].id===friend.userId){
        friendUser=users[i];
        break;
      }
    }
    this.loadChatServiceObject.openChat(friendUser);
  }

}
