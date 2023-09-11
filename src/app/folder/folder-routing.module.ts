import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FolderPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'acercade',
        loadChildren: () =>
          import('./pages/about/about.module').then((m) => m.AboutPageModule),
        },
        {
          path: 'procedimientos',
          loadChildren: () => import('./pages/procedures/procedures.module').then( m => m.ProceduresPageModule)
        },
        {
          path: 'abogados',
          loadChildren: () => import('./pages/lawyers/lawyers.module').then( m => m.LawyersPageModule)
        },
        {
          path: 'formatos',
          loadChildren: () => import('./pages/formats/formats.module').then( m => m.FormatsPageModule)
        },
        {
          path: 'asesoria',
          loadChildren: () => import('./pages/legal-advisory/legal-advisory.module').then( m => m.LegalAdvisoryPageModule)
        },
        {
          path: 'conversaciones',
          loadChildren: () => import('./pages/conversations/conversations.module').then( m => m.ConversationsPageModule)
        },
    ],
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
