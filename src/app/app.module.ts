import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { TopBarComponent } from './components/helpers/top-bar/top-bar.component';
import { MessageEditorComponent } from './components/helpers/message-editor/message-editor.component';
import { FriendComponent } from './components/friends-list/friend/friend.component';
import { MessageBoxComponent } from './components/chat-window/message-box/message-box.component';
import { UserMenuComponent } from './components/helpers/user-menu/user-menu.component';
import { ChatUtilityMenuComponent } from './components/helpers/chat-utility-menu/chat-utility-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponent,
    ChatWindowComponent,
    TopBarComponent,
    MessageEditorComponent,
    FriendComponent,
    MessageBoxComponent,
    UserMenuComponent,
    ChatUtilityMenuComponent
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
