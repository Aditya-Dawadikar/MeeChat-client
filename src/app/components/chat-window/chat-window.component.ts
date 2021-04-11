import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {User} from 'src/shared/user';
import {Chats} from 'src/shared/Mock data/chats';
import { Chat } from 'src/shared/chat';
import {Message} from 'src/shared/message';

import {LoadChatService} from 'src/app/services/load-chat.service';
import {LoginSignupService} from 'src/app/services/login-signup.service';
import {ClearChatService} from 'src/app/services/messagingServices/clear-chat.service';
import {DeleteMessageService} from 'src/app/services/messagingServices/delete-message.service';

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
  chatId:number;
  scrollHeight:number;

  block=false;
  first=true;
  isLoaded=false;

  @ViewChild('chats') chatArea:ElementRef;


  deleteableMessage:Message;
  deleteFlag:Boolean;

  constructor(
      private loadChatService:LoadChatService,
      private getUserObject:LoginSignupService,
      private deleteMessageObject:DeleteMessageService,
      private clearChatObject:ClearChatService
    ) {
    }

  ngOnInit(): void {
    //this.me=users[0];
    this.me=this.getUserObject.getAuthUser();

    this.loadChatService.friendUser$.subscribe(
      friendUser=>{
        if(friendUser==undefined){
          this.isLoaded=false;
        }else{
          this.isLoaded=true;
          this.friend=friendUser;
          this.loadChat();
        }
      }
    );

    this.deleteMessageObject.messageObserver.subscribe(
      (message:Message)=>{
        this.deleteableMessage=message;
      }
    );

    this.deleteMessageObject.flagObserver.subscribe(
      flag=>{
        if(flag==true){
          this.deleteMessage(this.deleteableMessage);
          this.deleteMessageObject.resetDeleteFlag();
        }
      }
    );

    this.clearChatObject.chatObserver.subscribe((response)=>{
      if(response ==true){
        this.clearChat();
      }
    });
  }

  ngAfterViewChecked(){
    this.scrollToBottom();
  }

  loadChat(){
    this.chatId=this.getChatId();
    this.conversation=Chats[this.chatId];
    this.messages=this.conversation.conversation;
  }

  scrollToBottom(){
    if(this.isLoaded){
      this.chatArea.nativeElement.scrollTop=this.chatArea.nativeElement.scrollHeight;
    }
  }

  getChatId(){
    for(let i=0;i<this.me.friends.length;i++){
      if(this.me.friends[i].friendName.localeCompare(this.friend.userName)===0){
        return this.me.friends[i].chatId;
      }
    }
  }

  deleteMessage(message: Message){
    let id=this.conversation.conversation.indexOf(message);
    this.conversation.conversation.splice(id,1);
  }

  clearChat(){
    let l=Chats[this.chatId].conversation.length;
    Chats[this.chatId].conversation.splice(0,l);
    this.messages.splice(0,this.messages.length);
  }

}
