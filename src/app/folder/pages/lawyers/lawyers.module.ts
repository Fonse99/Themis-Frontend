import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LawyersPageRoutingModule } from './lawyers-routing.module';

import { LawyersPage } from './lawyers.page';
import { SharedModule } from '../../modules/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LawyersPageRoutingModule,
    SharedModule,
    NgxPaginationModule
  ],
  declarations: [LawyersPage]
})
export class LawyersPageModule {}
