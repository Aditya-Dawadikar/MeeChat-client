import { Component, OnInit,Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/shared/Mock data/users';
import {User} from 'src/shared/user';

@Component({
  selector: 'app-top-bar-friend',
  templateUrl: './top-bar-friend.component.html',
  styleUrls: ['./top-bar-friend.component.css']
})
export class TopBarFriendComponent implements OnInit {


  @Input() userName:string;
  @Input() father:string;
  @ViewChild('menuButton') menuButton:ElementRef;
  @ViewChild('menuBox') menuBox:ElementRef;

  menuStatus:boolean;
  show:boolean;

  constructor(
    private renderer:Renderer2,
    private router:Router
  ) {
    this.renderer.listen('window','click',(e:Event)=>{
      if(e.target!=this.menuButton.nativeElement && e.target!=this.menuBox.nativeElement){
        this.menuStatus=true;
      }
    });
  }

  ngOnInit(): void {
    this.menuStatus=true;
    this.show=false;
  }

  toggleMenu(){
    this.menuStatus=!this.menuStatus;
  }

  showModal(){
    this.show=true;
  }

  closeModal(){
    this.show=false;
  }

  findUser(){
    let result:User;
    for(let user of users){
      if(user.userName===this.userName){
        result=user;
        break;
      }
    }
    return result;
  }

}
