import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pilotes',
    loadChildren: () => import('./pilote/pilote.module').then(m => m.PiloteModule)
  },
  {
    path: 'equipes',
    loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
