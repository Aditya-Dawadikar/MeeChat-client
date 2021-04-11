import { Component, OnInit,Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { users } from 'src/shared/Mock data/users';
import {User} from 'src/shared/user';
import { Friend } from 'src/shared/friend';
import {Chats} from 'src/shared/Mock data/chats';

import {LoginSignupService} from 'src/app/services/login-signup.service';
import {LoadUserProfileService} from 'src/app/services/load-user-profile.service';
import {BlockUserService} from 'src/app/services/messagingServices/block-user.service';
import {ClearChatService} from 'src/app/services/messagingServices/clear-chat.service';


@Component({
  selector: 'app-top-bar-friend',
  templateUrl: './top-bar-friend.component.html',
  styleUrls: ['./top-bar-friend.component.css']
})
export class TopBarFriendComponent implements OnInit {

  @Input() friend:User;
  @ViewChild('menuButton') menuButton:ElementRef;
  @ViewChild('menuBox') menuBox:ElementRef;

  authUser:User;
  menuStatus:boolean;
  show:boolean;
  option:number;
  chatId:number;

  constructor(
    private renderer:Renderer2,
    private profileObject:LoadUserProfileService,
    private blockUserObject:BlockUserService,
    private clearChatObject:ClearChatService,
    private authUserObject:LoginSignupService
  ) {
    this.renderer.listen('window','click',(e:Event)=>{
      if(e.target!=this.menuButton.nativeElement && e.target!=this.menuBox.nativeElement){
        this.menuStatus=false;
      }
    });
  }

  ngOnInit(): void {
    this.menuStatus=false;
    this.show=false;

    this.authUser=this.authUserObject.getAuthUser();
    this.getChatId();

    this.blockUserObject.userObserver.subscribe((response:Boolean)=>{
      if(response==true){
        this.blockUser();
      }
    });

    // this.clearChatObject.chatObserver.subscribe((response:Boolean)=>{
    //   if(response==true){
    //     this.clearChat();
    //   }
    // });

  }

  toggleMenu(){
    this.menuStatus=!this.menuStatus;
  }

  showModal(n:number){
    this.show=true;
    switch(n){
      case 2: {
        //load user profile
        this.profileObject.loadUserProfile(this.friend);
        this.setOption(2);
        break;
      }
      case 3: {
        //block
        this.setOption(3);
        break;
      }
      case 4:{
        //clearChat
        this.setOption(4);
        break;
      }
    }
  }

  closeModal(){
    this.show=false;
  }

  setOption(n:number){
    this.option=n;
  }

  blockUser(){
    for(let i=0;i<this.authUser.friends.length;i++ ){
      if(this.friend.userName===this.authUser.friends[i].friendName){
        this.authUser.blocked.push(this.authUser.friends[i]);
        this.authUser.friends.splice(i,1);
        break;
      }
    }
  }

  clearChat(){
    let l=Chats[this.chatId].conversation.length;
    console.log(Chats[this.chatId].conversation);
    Chats[this.chatId].conversation=[];
    console.log(Chats[this.chatId].conversation);
  }

  getChatId(){
    for(let i=0;i<this.authUser.friends.length;i++){
      if(this.friend.userName===this.authUser.friends[i].friendName){
        this.chatId=this.authUser.friends[i].chatId;
      }
    }
  }

}
