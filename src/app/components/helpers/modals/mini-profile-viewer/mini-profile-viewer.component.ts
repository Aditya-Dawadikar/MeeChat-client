import { Component, OnInit,Input } from '@angular/core';
import { User } from 'src/shared/user';

@Component({
  selector: 'app-mini-profile-viewer',
  templateUrl: './mini-profile-viewer.component.html',
  styleUrls: ['./mini-profile-viewer.component.css']
})
export class MiniProfileViewerComponent implements OnInit {

  constructor(
  ) { }

  @Input() user:User;

  ngOnInit(): void {
  }

}
