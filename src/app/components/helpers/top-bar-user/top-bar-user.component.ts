import { Component, OnInit,Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-bar-user',
  templateUrl: './top-bar-user.component.html',
  styleUrls: ['./top-bar-user.component.css']
})
export class TopBarUserComponent implements OnInit {


  @Input() userName:string;
  @Input() father:string;

  menuHidden:boolean;

  constructor() { }

  ngOnInit(): void {
    this.menuHidden=true;
  }

  toggleMenu(){
    this.menuHidden=!this.menuHidden;
  }
}
