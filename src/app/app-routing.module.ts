import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeStageComponent } from './pages/demande-stage/demande-stage.component';

import { FullComponent } from './layouts/full/full.component';
import { DemandeStageFormComponent } from './pages/demande-stage-form/demande-stage-form.component';


export const Approutes: Routes = [
  { path: 'demande-stage-form', component: DemandeStageFormComponent },
  {
    path: '',
    component: FullComponent,
    children: [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'component',
    loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
  },

  // 👉 Ta nouvelle route
  {
    path: 'demande-stage',
    component: DemandeStageComponent,
    data: {
      title: 'Demande de stage',
      urls: [{ title: 'Formulaire', url: '/demande-stage' }]
    }
  }
]

  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
