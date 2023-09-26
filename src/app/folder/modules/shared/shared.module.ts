import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemCardComponent } from './components/list-item-card/list-item-card.component';
import { IonicModule } from '@ionic/angular';
import { ListItemProfileComponent } from './components/list-item-profile/list-item-profile.component';



@NgModule({
  declarations: [
    ListItemCardComponent,
    ListItemProfileComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    ListItemCardComponent,
    ListItemProfileComponent
  ]
})
export class SharedModule { }
