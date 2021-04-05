import { Component, OnInit } from '@angular/core';
import {users} from 'src/shared/Mock data/users';
import {User} from 'src/shared/user';
import {Chats} from 'src/shared/Mock data/chats';
import { Chat } from 'src/shared/chat';
import {Message} from 'src/shared/message';

import {LoadChatService} from 'src/app/services/load-chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  me:User;
  friend:User;
  conversation:Chat;
  messages:Message[];
  first=true;
  chatId:number;

  constructor(private loadChatService:LoadChatService) { }

  ngOnInit(): void {
    this.me=users[0];
    this.loadChatService.friendUser$.subscribe(
      friendUser=>{
        this.friend=friendUser;
        this.loadChat();
      }
    );
  }

  loadChat(){
    for(let i=0;i<this.me.friends.length;i++){
      if(this.me.friends[i].friendName.localeCompare(this.friend.userName)){
        this.chatId=this.me.friends[i].chatId;
        break;
      }
    }
    this.conversation=Chats[this.chatId];
    this.messages=this.conversation.conversation;
  }

}
