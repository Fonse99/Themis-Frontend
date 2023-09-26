import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalAdvisoryPage } from './legal-advisory.page';

const routes: Routes = [
  {
    path: '',
    component: LegalAdvisoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalAdvisoryPageRoutingModule {}
