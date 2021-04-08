import {  Component, Input, OnInit } from '@angular/core';
import { Friend } from 'src/shared/friend';
import {LoadUserProfileService} from 'src/app/services/load-user-profile.service';
import {users} from 'src/shared/Mock data/users';
import {User} from 'src/shared/user';

@Component({
  selector: 'app-friend-finder',
  templateUrl: './friend-finder.component.html',
  styleUrls: ['./friend-finder.component.css']
})
export class FriendFinderComponent implements OnInit {

  @Input() friends:Friend[];

  constructor(private loadProfileObject:LoadUserProfileService) { }

  ngOnInit(): void {
  }

  showFriendProfile(friend:Friend){
    var targetProfile:User;
    for(let i=0;i<users.length;i++){
      if(friend.friendName===users[i].userName){
        targetProfile=users[i];
        break;
      }
    }
    this.loadProfileObject.loadUserProfile(targetProfile);
  }

  initializeView(targetProfile:User){
    this.loadProfileObject.loadUserProfile(targetProfile);
  }

}
