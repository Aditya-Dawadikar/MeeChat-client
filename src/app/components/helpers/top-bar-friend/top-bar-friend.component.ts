import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-top-bar-friend',
  templateUrl: './top-bar-friend.component.html',
  styleUrls: ['./top-bar-friend.component.css']
})
export class TopBarFriendComponent implements OnInit {


  @Input() userName:string;
  @Input() father:string;

  menuStatus:boolean;

  constructor() { }

  ngOnInit(): void {
    this.menuStatus=true;
  }

  toggleMenu(){
    this.menuStatus=!this.menuStatus;
  }

}
