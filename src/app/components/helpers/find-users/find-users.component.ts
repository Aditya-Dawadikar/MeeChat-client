import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/user';
import {users} from 'src/shared/Mock data/users';
import {LoginSignupService} from 'src/app/services/login-signup.service';
import { Friend } from 'src/shared/friend';
@Component({
  selector: 'app-find-users',
  templateUrl: './find-users.component.html',
  styleUrls: ['./find-users.component.css']
})
export class FindUsersComponent implements OnInit {

  user:User;
  tab:number;
  userList:User[];
  requestList:User[];

  constructor(
    private authUserObject:LoginSignupService
  ) { }

  ngOnInit(): void {
    this.tab=1;
    this.userList=[];
    this.user = this.authUserObject.getAuthUser();

    this.requestList=this.user.requests.received;
    this.initUserList();
  }

  viewUsers(){
    this.tab=1;
  }

  viewRequests(){
    this.tab=2;
    console.log(this.user.requests);
  }

  initUserList(){
    let unwanted=[];
    let unwantedSelfObject={
      friendName:this.user.userName,
      userId:-1,
      chatId:-1
    }
    unwanted.push(unwantedSelfObject);
    for(let i=0;i<this.user.friends.length;i++){
      unwanted.push(this.user.friends[i]);
    }for(let i=0;i<this.user.blocked.length;i++){
      unwanted.push(this.user.blocked[i]);
    }

    for(let i=0;i<users.length;i++){
      this.userList.push(users[i]);
    }

    for(let i=0;i<this.userList.length;i++){
       for(let j=0;j<unwanted.length;j++){
         if(this.userList[i].userName === unwanted[j].friendName){
           this.userList.splice(i,1);
         }
       }
    }
  }
}
