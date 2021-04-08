import { Component, OnInit,Input, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import {LoginSignupService} from 'src/app/services/login-signup.service';
import { User } from 'src/shared/user';

@Component({
  selector: 'app-top-bar-user',
  templateUrl: './top-bar-user.component.html',
  styleUrls: ['./top-bar-user.component.css']
})
export class TopBarUserComponent implements OnInit {


  @Input() userName:string;
  @Input() father:string;
  @ViewChild('menuButton') menuButton:ElementRef;
  @ViewChild('menuBox') menuBox:ElementRef;

  menuHidden:boolean;
  user:User;

  constructor(
      private renderer:Renderer2,
      private router:Router,
      private authUserObject:LoginSignupService
    ) {
    this.renderer.listen('window','click',(e:Event)=>{
      if(e.target!=this.menuButton.nativeElement && e.target!=this.menuBox.nativeElement){
        this.menuHidden=true;
      }
    })
  }

  ngOnInit(): void {
    this.menuHidden=true;
    this.user=this.authUserObject.getAuthUser();
  }

  toggleMenu(){
    this.menuHidden=!this.menuHidden;
  }

  visitProfile(){
    this.router.navigateByUrl('/profile/'+this.user.id);
  }

  visitLoginGateway(){
    this.router.navigateByUrl('/login');
  }
}
