import { Component, Input, OnInit } from '@angular/core';
import { Friend } from 'src/shared/friend';
import { User } from 'src/shared/user';
import { Message } from 'src/shared/message';
import{users} from 'src/shared/Mock data/users';
import {Chats} from 'src/shared/Mock data/chats';
import {LoadChatService} from 'src/app/services/load-chat.service';

@Component({
  selector: 'app-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.css']
})

export class MessageEditorComponent implements OnInit {

  @Input() receiver:User;
  @Input() self:User;
  @Input() chatId:number;

  text:string;
  defaultValue='';

  constructor(private loadChatServiceObject:LoadChatService) { }

  ngOnInit(): void {
    this.loadChatServiceObject.friendUser$.subscribe(friendUser=>{
      this.receiver=friendUser;
    });
  }

  generateMessageObject(text:string,sender:User,receiver:User,meta:number) {
    let message:Message={
      sender:sender.userName,
      senderId:sender.id,
      receiver:receiver.userName,
      receiverId:receiver.id,
      body:text,
      meta:{
        date:meta,
      }
    }
    console.log(message);
    return message;
  }

  send() {
    if(this.defaultValue!=""){
      let message:Message=this.generateMessageObject(this.defaultValue,this.self,this.receiver,Date.now());
      Chats[this.chatId].conversation.push(message);
    }
    this.defaultValue='';
  }



}
