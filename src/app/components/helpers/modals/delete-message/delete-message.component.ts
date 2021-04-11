import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {DeleteMessageService} from 'src/app/services/messagingServices/delete-message.service';

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.css']
})
export class DeleteMessageComponent implements OnInit {

  @Output() closeModal=new EventEmitter();

  constructor(
    private deleteMessageObject:DeleteMessageService
  ) { }

  ngOnInit(): void {
  }

  delete(){
    this.deleteMessageObject.setDeleteFlag();
    this.closeModal.emit();
  }

}
