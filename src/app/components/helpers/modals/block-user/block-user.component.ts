import { Component, OnInit,EventEmitter,Output  } from '@angular/core';
import {BlockUserService} from 'src/app/services/messagingServices/block-user.service';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.css']
})
export class BlockUserComponent implements OnInit {

  @Output() closeModal=new EventEmitter();

  constructor(
    private blockUserObject:BlockUserService
  ) { }

  ngOnInit(): void {
  }

  blockUser(){
    this.blockUserObject.blockUser();
    this.closeModal.emit();
  }
}
