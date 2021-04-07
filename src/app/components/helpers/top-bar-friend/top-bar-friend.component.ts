import { Component, OnInit,Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private renderer:Renderer2,private router:Router) {
    this.renderer.listen('window','click',(e:Event)=>{
      if(e.target!=this.menuButton.nativeElement && e.target!=this.menuBox.nativeElement){
        this.menuStatus=true;
      }
    });
  }

  ngOnInit(): void {
    this.menuStatus=true;
  }

  toggleMenu(){
    this.menuStatus=!this.menuStatus;
  }

  visitProfile(){
    this.router.navigateByUrl('/profile');
  }

}
