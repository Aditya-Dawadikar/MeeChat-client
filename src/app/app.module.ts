import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { MessageEditorComponent } from './components/helpers/message-editor/message-editor.component';
import { FriendComponent } from './components/friends-list/friend/friend.component';
import { MessageBoxComponent } from './components/chat-window/message-box/message-box.component';
import { TopBarUserComponent } from './components/helpers/top-bar-user/top-bar-user.component';
import { TopBarFriendComponent } from './components/helpers/top-bar-friend/top-bar-friend.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MessageOptionsComponent } from './components/helpers/message-options/message-options.component';
import { FriendFinderComponent } from './components/helpers/friend-finder/friend-finder.component';
import { FriendProfileComponent } from './components/helpers/friend-profile/friend-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponent,
    ChatWindowComponent,
    MessageEditorComponent,
    FriendComponent,
    MessageBoxComponent,
    TopBarUserComponent,
    TopBarFriendComponent,
    ChatPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    MessageOptionsComponent,
    FriendFinderComponent,
    FriendProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
