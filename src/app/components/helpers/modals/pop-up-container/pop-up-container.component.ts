import { Component, OnInit,Input,EventEmitter, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {LoadUserProfileService} from 'src/app/services/load-user-profile.service';
import {User} from 'src/shared/user';

@Component({
  selector: 'app-pop-up-container',
  templateUrl: './pop-up-container.component.html',
  styleUrls: ['./pop-up-container.component.css']
})
export class PopUpContainerComponent implements OnInit {


  @Input() show:boolean;
  @Input() state:number;
  @Output() cancelModal:EventEmitter<any>=new EventEmitter();
  @ViewChild('blockScreen') blockScreen:ElementRef;
  @ViewChild('modal') modal:ElementRef;
  user:User;

  states=['share','delete','friend-profile-mini','block','clear-chat'];

  constructor(
      private renderer:Renderer2,
      private profileObject:LoadUserProfileService
    ) {
      if(this.show){
        this.renderer.listen('window','click',(e:Event)=>{
          if(e.target!=this.modal.nativeElement){
            this.closeModal();
          }
        });
      }
    }

  ngOnInit(): void {
    this.profileObject.profileObserver.subscribe((user:User)=>{
      this.user=user;
    });
  }

  closeModal(){
    this.cancelModal.emit(!this.show);
    this.show=!this.show;
  }

}
