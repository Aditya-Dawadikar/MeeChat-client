import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginPageComponent} from 'src/app/pages/login-page/login-page.component';
import {ProfilePageComponent} from 'src/app/pages/profile-page/profile-page.component';
import {ChatPageComponent} from 'src/app/pages/chat-page/chat-page.component';

const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'profile',component:ProfilePageComponent},
  {path:'chat',component:ChatPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
