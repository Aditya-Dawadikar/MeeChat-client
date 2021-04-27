import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from 'src/shared/message';

@Injectable({
  providedIn: 'root'
})
export class ShareMessageService {

  constructor() { }

  private messageSource = new Subject();
  messageObserver = this.messageSource.asObservable();

  shareableMessage:Message;
  shareableMessageQueue:Message[];

  getShareableMessage(){
    return this.shareableMessage;
  }

  setShareableMessage(message:Message){
    this.shareableMessage=message;
  }

  pushToQueue(message:Message){
    this.shareableMessageQueue.push(message);
  }

  getMessageQueue(){
    return this.shareableMessageQueue;
  }

  clearMessageQueue(){
    this.shareableMessageQueue=[];
  }

}
