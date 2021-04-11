import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {Message} from 'src/shared/message';
import {ShareMessageService} from 'src/app/services/messagingServices/share-message.service';
import {DeleteMessageService} from 'src/app/services/messagingServices/delete-message.service';

@Component({
  selector: 'app-message-options',
  templateUrl: './message-options.component.html',
  styleUrls: ['./message-options.component.css']
})
export class MessageOptionsComponent implements OnInit {

  @Input() state:boolean;
  @Input() message:Message;
  @Output() deleteMessageEvent= new EventEmitter();

  show:boolean;
  states:["share","delete"];
  option:number;

  constructor(
    private shareMessageObject:ShareMessageService,
    private deleteMessageObject:DeleteMessageService
  ) { }

  ngOnInit(): void {
    this.show=false;
  }

  shareMessage(){
    this.show=true;
    this.option=0;
    this.shareMessageObject.setShareableMessage(this.message);
  }

  deleteMessage(){
    this.show=true;
    this.option=1;
    this.deleteMessageObject.setDeleteableMessage(this.message);
  }

  closeModal(){
    this.show=false;
  }
}
