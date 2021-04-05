import { Component, Input, OnInit } from '@angular/core';
import {Message} from 'src/shared/message';
import { User } from 'src/shared/user';
import {users} from 'src/shared/Mock data/users';
@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  user:User;

  @Input() message:Message;

  localSender:Boolean=false;
  timing:string;
  constructor() { }

  ngOnInit(): void {
    this.user=users[0];
    if(this.message.receiver.localeCompare(this.user.userName)){
      this.localSender=true;
    }else{
      this.localSender=false;
    }
    this.timing=this.getDateFromTimeStamp(this.message.meta.date);
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

}
