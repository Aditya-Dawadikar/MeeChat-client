import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import {Message} from 'src/shared/message';
import { User } from 'src/shared/user';
import {users} from 'src/shared/Mock data/users';

import {LoginSignupService} from 'src/app/services/login-signup.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  user:User;

  @Input() message:Message;
  @ViewChild('caret') caretButton:ElementRef;
  @ViewChild('msg') msgBox:ElementRef;

  timing:string;
  messageOptionHide=true;

  constructor(
    private rendered: Renderer2,
    private authUserObject:LoginSignupService
    ) {
      this.rendered.listen('window','click',(e:Event)=>{
        if(e.target!=this.caretButton.nativeElement && e.target!=this.msgBox.nativeElement){
          this.messageOptionHide=true;
        }
      });
   }

  ngOnInit(): void {
    //this.user=users[0];
    this.user=this.authUserObject.getAuthUser();
    this.timing=this.getDateFromTimeStamp(this.message.meta.date);
  }

  getDateFromTimeStamp(timeStamp:number){
    var s="";
    var date=new Date(timeStamp);
    s+=date.getHours()+":"+date.getMinutes();
    return s;
  }

  caretClicked(){
    this.messageOptionHide=!this.messageOptionHide;
  }

}
