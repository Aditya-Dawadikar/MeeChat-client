import { Component, OnInit,Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Friend } from 'src/shared/friend';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css']
})
export class FriendCardComponent implements OnInit {

  @Input() friend:Friend;
  clicked:boolean

  @ViewChild('card') card:ElementRef;

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.listen('window','click',(e:Event)=>{
      if(e.target!=this.card.nativeElement){
        this.clicked=false;
      }
    });
  }

  setActive(){
    this.clicked=true;
  }

}
