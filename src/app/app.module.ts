import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

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
import { MessageOptionsComponent } from './components/helpers/modals/message-options/message-options.component';
import { FriendFinderComponent } from './components/helpers/friend-finder/friend-finder.component';
import { FriendProfileComponent } from './components/helpers/friend-profile/friend-profile.component';
import { FriendCardComponent } from './components/helpers/friend-finder/friend-card/friend-card.component';
import { PopUpContainerComponent } from './components/helpers/modals/pop-up-container/pop-up-container.component';
import { MiniProfileViewerComponent } from './components/helpers/modals/mini-profile-viewer/mini-profile-viewer.component';
import { ShareWithFriendsComponent } from './components/helpers/modals/share-with-friends/share-with-friends.component';
import { DeleteMessageComponent } from './components/helpers/modals/delete-message/delete-message.component';
import { BlockUserComponent } from './components/helpers/modals/block-user/block-user.component';
import { ClearChatComponent } from './components/helpers/modals/clear-chat/clear-chat.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { SettingPanelComponent } from './components/helpers/setting-panel/setting-panel.component';

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
    FriendProfileComponent,
    FriendCardComponent,
    PopUpContainerComponent,
    MiniProfileViewerComponent,
    ShareWithFriendsComponent,
    DeleteMessageComponent,
    BlockUserComponent,
    ClearChatComponent,
    ControlPanelComponent,
    SettingPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
