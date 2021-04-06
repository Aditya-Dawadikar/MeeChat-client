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

@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponent,
    ChatWindowComponent,
    MessageEditorComponent,
    FriendComponent,
    MessageBoxComponent,
    TopBarUserComponent,
    TopBarFriendComponent
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
