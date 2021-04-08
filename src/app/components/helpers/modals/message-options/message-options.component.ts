import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-message-options',
  templateUrl: './message-options.component.html',
  styleUrls: ['./message-options.component.css']
})
export class MessageOptionsComponent implements OnInit {

  @Input() state:boolean;

  show:boolean;

  constructor(
  ) { }

  ngOnInit(): void {
    this.show=false;
  }

  shareMessage(){
    this.show=true;
  }
  deleteMessage(){
    this.show=true;
  }

  closeModal(){
    this.show=false;
  }
}
