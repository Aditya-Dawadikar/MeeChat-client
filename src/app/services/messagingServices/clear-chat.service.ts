import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClearChatService {

  constructor() { }

  private chatSource= new Subject();
  chatObserver = this.chatSource.asObservable();

  clearChat(){
    this.chatSource.next(true);
  }


}
