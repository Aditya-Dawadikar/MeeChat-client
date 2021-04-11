import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Message} from 'src/shared/message';

@Injectable({
  providedIn: 'root'
})
export class DeleteMessageService {

  constructor() { }

  private messageSource = new Subject();
  messageObserver = this.messageSource.asObservable();

  private flagSource = new Subject();
  flagObserver = this.flagSource.asObservable();

  deleteableMessage:Message;
  deleteFlag:boolean;

  setDeleteFlag(){
    this.deleteFlag=true;
    this.flagSource.next(this.deleteFlag);
  }

  resetDeleteFlag(){
    this.deleteFlag=false;
  }

  getDeleteFlag(){
    return this.deleteFlag;
  }

  setDeleteableMessage(message:Message){
    this.deleteableMessage=message;
    this.messageSource.next(message);
  }

  getDeleteableMessage(){
    return this.deleteableMessage;
  }
}
