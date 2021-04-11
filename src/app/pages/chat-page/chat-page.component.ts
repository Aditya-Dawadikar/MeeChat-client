import { Component, OnInit, ViewChild } from '@angular/core';
//import {ChatWindowComponent} from '../../components/chat-window/chat-window.component';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor() { }

  //@ViewChild(ChatWindowComponent) chatWindow;

  ngOnInit(): void {

  }

  // ngAfterViewInit(){
  //   console.log(this.chatWindow);
  // }

}
