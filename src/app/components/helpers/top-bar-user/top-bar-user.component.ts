import { Component, OnInit,Input, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private renderer:Renderer2, private router:Router) {
    this.renderer.listen('window','click',(e:Event)=>{
      if(e.target!=this.menuButton.nativeElement && e.target!=this.menuBox.nativeElement){
        this.menuHidden=true;
      }
    })
  }

  ngOnInit(): void {
    this.menuHidden=true;
  }

  toggleMenu(){
    this.menuHidden=!this.menuHidden;
  }

  visitProfile(){
    this.router.navigateByUrl('/profile');
  }

  visitLoginGateway(){
    this.router.navigateByUrl('/login');
  }
}
