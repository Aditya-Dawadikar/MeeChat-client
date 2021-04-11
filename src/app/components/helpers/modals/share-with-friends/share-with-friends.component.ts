import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/shared/user';
import { Friend } from 'src/shared/friend';
import {Message} from 'src/shared/message';
import {Chats} from 'src/shared/Mock data/chats';

import {LoginSignupService} from 'src/app/services/login-signup.service';
import {ShareMessageService} from 'src/app/services/messagingServices/share-message.service';

@Component({
  selector: 'app-share-with-friends',
  templateUrl: './share-with-friends.component.html',
  styleUrls: ['./share-with-friends.component.css']
})
export class ShareWithFriendsComponent implements OnInit {

  user:User
  selectedFriends=[];
  selectedFriendNames:String;
  messageBody:string;

  constructor(
    private authUserObject:LoginSignupService,
    private shareMessageObject:ShareMessageService
  ) { }

  ngOnInit(): void {
    this.user=this.authUserObject.getAuthUser();
    this.selectedFriendNames="";
    this.messageBody=this.shareMessageObject.getShareableMessage().body;
  }

  selectFriends(friend:Friend){
    if(this.selectedFriends.includes(friend)){
      let i=this.selectedFriends.indexOf(friend);
      this.selectedFriends.splice(i,1);
    }else{
      this.selectedFriends.push(friend);
    }
    this.selectedFriendNames="";
    for(let i=0;i<this.selectedFriends.length;i++){
      this.selectedFriendNames+=" "+this.selectedFriends[i].friendName;
    }
  }

  share(){
    if(this.selectedFriendNames.length>0){
      for(let i=0;i<this.selectedFriends.length;i++){
        let message:Message;
        message={
          sender:this.user.userName,
          senderId:this.user.id,
          receiver:this.selectedFriends[i].friendName,
          receiverId:this.selectedFriends[i].userId,
          body:this.messageBody,
          meta:{
            date:Date.now(),
            seen:false,
          }
        }
        let friendId:number;
        friendId=this.user.friends.indexOf(this.selectedFriends[i]);
        let chatId=this.user.friends[friendId].chatId;
        Chats[chatId].conversation.push(message);
      }
    }
  }

}
