import { Component, OnInit,EventEmitter,Output  } from '@angular/core';
import {ClearChatService} from 'src/app/services/messagingServices/clear-chat.service';

@Component({
  selector: 'app-clear-chat',
  templateUrl: './clear-chat.component.html',
  styleUrls: ['./clear-chat.component.css']
})
export class ClearChatComponent implements OnInit {

  @Output() closeModal=new EventEmitter();

  constructor(
    private clearChatObject:ClearChatService
  ) { }

  ngOnInit(): void {
  }

  clearChat(){
    this.clearChatObject.clearChat();
    this.closeModal.emit();
  }

}
