import { Component, HostListener, Input, OnInit } from '@angular/core';
import { User } from 'src/shared/user';
import {users} from 'src/shared/Mock data/users';
import { Friend } from 'src/shared/friend';
import {Chats} from 'src/shared/Mock data/chats';
import { from } from 'rxjs';

import {LoadChatService} from 'src/app/services/load-chat.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  @Input() friend:Friend;

  user:User;
  lastMessage:string;
  meta:string;
  active:boolean;
  constructor(private loadChatService:LoadChatService) {
    this.active=false;
    this.loadChatService.friendUser$.subscribe(
      friendUser=>{
        if(this.friend.friendName===friendUser.userName){
          this.active=true;
        }else{
          this.active=false;
        }
      }
    );
  }

  ngOnInit(): void {
      for(let i=0;i<users.length;i++){
        if(users[i].userName.localeCompare(this.friend.friendName)===0){
          this.user=users[i];
          break;
        }
      }
      let msgIndex=Chats[this.friend.chatId].conversation.length-1;
      this.lastMessage=Chats[this.friend.chatId].conversation[msgIndex].body;
      this.meta=this.getDateFromTimeStamp(Chats[this.friend.chatId].conversation[msgIndex].meta.date);
  }

  getDateFromTimeStamp(timeStamp:number){
    var s="";
    var date=new Date(timeStamp);
    s+=date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()+
          " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds()
    return s;
  }

  setActive(){
    this.active=true;
  }

}
