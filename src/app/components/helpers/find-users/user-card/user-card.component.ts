import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { User } from 'src/shared/user';
import {LoginSignupService} from 'src/app/services/login-signup.service';
import {Friend} from 'src/shared/friend';
import {Chats} from 'src/shared/Mock data/chats';
import {Chat} from 'src/shared/chat';
import {Message} from 'src/shared/message';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user:User;
  @Input() state:number;
  @ViewChild('card') card:ElementRef;

  authUser:User;
  clicked:boolean;
  constructor(
    private authUserObject:LoginSignupService
  ) {
    this.authUser=this.authUserObject.getAuthUser();
  }

  ngOnInit(): void {
    this.clicked=false;
  }

  sendRequest(){
    this.user.requests.received.push(this.authUser);
    this.authUser.requests.sent.push(this.user);
    console.log(this.user);
    console.log(this.authUser)
  }

  acceptRequest(){
    let newChat:Chat={
      id:Chats.length,
      user1: this.authUser.userName,
      user1Id: this.authUser.id,
      user2: this.user.userName,
      user2Id: this.user.id,
      conversation:[]
    }
    let newFriend:Friend={
      friendName:this.user.userName,
      userId:this.user.id,
      chatId:newChat.id
    }

    this.authUser.friends.push(newFriend);
    Chats.push(newChat);
    this.authUser.requests.received.splice(this.authUser.requests.received.indexOf(this.user),1);
  }

  removeRequest(){
    this.authUser.requests.received.splice(this.authUser.requests.received.indexOf(this.user),1);
    this.user.requests.sent.splice(this.user.requests.sent.indexOf(this.authUser),1);
    console.log(this.user);
  }
}
