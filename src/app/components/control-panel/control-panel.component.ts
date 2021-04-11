import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Friend } from 'src/shared/friend';
import { User } from 'src/shared/user';
import {users} from 'src/shared/Mock data/users';
import {LoginSignupService} from 'src/app/services/login-signup.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  @Input() State:number;

  state=['account','friends','notifications'];
  states=['account','friends','settings'];
  friendOptions=['all friends','blocked'];

  currState:number;
  currOption:number;

  me:User;
  friends:Friend[];
  blocked:Friend[];

  constructor(
    private router:Router,
    private authUserObject:LoginSignupService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.me=this.authUserObject.getAuthUser();
    this.State=0;
    this.currOption=0;
    this.friends=this.me.friends;
    this.blocked=this.me.blocked;
  }

  setState(index:number){
    this.State=index;
  }

  setCurrentOption(index:number){
    this.currOption=index;
  }
}
