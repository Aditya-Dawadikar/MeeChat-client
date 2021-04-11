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
  states=['account','friends','settings'];
  friendOptions=['all friends','blocked'];
  notificationOptions=['volume','ringtone','mute all notifications'];

  currState:number;

  constructor(
      private router:Router,
      private authUserObject:LoginSignupService,
      private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.currState=0;
  }

  //show views
  showAccount(){
    this.currState=0;
  }
  showFriends(){
    this.currState=1;
  }
  showSettings(){
    this.currState=2;
  }

  //navigation
  visitChat(){
    this.router.navigateByUrl('/chat');
  }


}
