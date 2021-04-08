import { Component, OnInit,Input,EventEmitter, Output, ViewChild, ElementRef, ViewChildren, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pop-up-container',
  templateUrl: './pop-up-container.component.html',
  styleUrls: ['./pop-up-container.component.css']
})
export class PopUpContainerComponent implements OnInit {


  @Input() show:boolean;
  @Output()
  cancelModal:EventEmitter<any>=new EventEmitter();
  @ViewChild('blockScreen') blockScreen:ElementRef;
  @ViewChild('modal') modal:ElementRef;


  constructor(
      private renderer:Renderer2,
    ) {
      this.renderer.listen('window','click',(e:Event)=>{
        console.clear();
        if(e.target==this.blockScreen.nativeElement){
          this.closeModal();
        }
      });
    }

  ngOnInit(): void {
  }

  closeModal(){
    this.cancelModal.emit(!this.show);
    this.show=!this.show;
  }

}
