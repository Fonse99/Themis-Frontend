import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatWindowPageRoutingModule } from './chat-window-routing.module';

import { ChatWindowPage } from './chat-window.page';
import { ChatBubbleComponent } from '../../chat-window/components/chat-bubble/chat-bubble.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ChatWindowPageRoutingModule
  ],
  declarations: [ChatWindowPage, ChatBubbleComponent]
})
export class ChatWindowPageModule {}
