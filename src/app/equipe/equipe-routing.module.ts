import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeDetailsComponent } from './pages/equipe-details/equipe-details.component';
import { EquipeListComponent } from './pages/equipe-list/equipe-list.component';

const routes: Routes = [
  {
    path: '',
    component: EquipeListComponent
  },
  {
    path: ':id',
    component: EquipeDetailsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
