import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/user';
import {LoadUserProfileService} from 'src/app/services/load-user-profile.service';

@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.component.html',
  styleUrls: ['./friend-profile.component.css']
})
export class FriendProfileComponent implements OnInit {

  constructor(private profileObject:LoadUserProfileService) { }

  user:User;

  ngOnInit(): void {
    this.profileObject.profileObserver.subscribe((profile:User)=>{
      this.user=profile;
    });
  }

}
