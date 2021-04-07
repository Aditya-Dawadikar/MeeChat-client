import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-message-options',
  templateUrl: './message-options.component.html',
  styleUrls: ['./message-options.component.css']
})
export class MessageOptionsComponent implements OnInit {

  constructor() { }
  @Input() state:boolean;

  ngOnInit(): void {
  }

}
