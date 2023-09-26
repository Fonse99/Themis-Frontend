import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegalAdvisoryPageRoutingModule } from './legal-advisory-routing.module';

import { LegalAdvisoryPage } from './legal-advisory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegalAdvisoryPageRoutingModule
  ],
  declarations: [LegalAdvisoryPage]
})
export class LegalAdvisoryPageModule {}
