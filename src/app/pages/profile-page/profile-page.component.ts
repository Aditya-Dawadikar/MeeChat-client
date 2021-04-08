import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Friend } from 'src/shared/friend';
import { User } from 'src/shared/user';
import {users} from 'src/shared/Mock data/users';
import {LoginSignupService} from 'src/app/services/login-signup.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {


  state=['account','friends','notifications'];
  friendOptions=['all friends','blocked'];
  notificationOptions=['volume','ringtone','mute all notifications'];

  currentState:string;
  currentOption:string;
  hideFriendView:boolean;
  hideAll:boolean;

  me:User;
  friends:Friend[];
  blocked:Friend[];

  constructor(
      private router:Router,
      private authUserObject:LoginSignupService,
      private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    //this.me=users[0];
    this.me=this.authUserObject.getAuthUser();
    this.currentState=this.state[0];
    this.currentOption=this.friendOptions[0];
    this.hideFriendView=false;
    this.friends=this.me.friends;
    this.blocked=this.me.blocked;
  }

  //show views
  showAccount(){
    this.currentState=this.state[0];
  }
  showFriends(){
    this.setFriendOption(0);
    this.currentState=this.state[1];
    this.hideFriendView=false;
  }
  showNotifications(){
    this.setNotificationOption(0);
    this.currentState=this.state[2];
  }

  //show options and settings
  setFriendOption(index:number){
    this.currentOption=this.friendOptions[index];
  }

  setNotificationOption(index:number){
    this.currentOption=this.notificationOptions[index];
  }

  //navigation
  visitChat(){
    this.router.navigateByUrl('/chat');
  }


}
