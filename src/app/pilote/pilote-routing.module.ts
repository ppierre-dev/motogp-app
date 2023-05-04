import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiloteDetailsComponent } from './pages/pilote-details/pilote-details.component';
import { PiloteListComponent } from './pages/pilote-list/pilote-list.component';

const routes: Routes = [
  {
    path: '',
    component: PiloteListComponent
  },
  {
    path: ':id',
    component: PiloteDetailsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PiloteRoutingModule { }
