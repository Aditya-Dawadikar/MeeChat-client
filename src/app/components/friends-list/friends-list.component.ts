import { Component, OnInit, Output } from '@angular/core';
import {User} from 'src/shared/user';
import { users } from 'src/shared/Mock data/users';
import { Friend } from 'src/shared/friend';
import {LoadChatService} from 'src/app/services/load-chat.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  user:User;
  friends:Friend[];

  constructor(private loadChatServiceObject:LoadChatService) {}

  ngOnInit(): void {
    this.user = users[0];
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
