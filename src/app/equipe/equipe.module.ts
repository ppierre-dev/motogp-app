import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe.component';
import { SharedModule } from '../shared/shared.module';
import { EquipeListComponent } from './pages/equipe-list/equipe-list.component';
import { EquipeService } from './services/equipe.service';
import { EquipeFormComponent } from './components/equipe-form/equipe-form.component';
import { EquipeDetailsComponent } from './pages/equipe-details/equipe-details.component';
import { EquipeCardComponent } from './components/equipe-card/equipe-card.component';


@NgModule({
  declarations: [
    EquipeComponent,
    EquipeListComponent,
    EquipeFormComponent,
    EquipeDetailsComponent,
    EquipeCardComponent
  ],
  providers: [
    EquipeService
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    SharedModule,
  ]
})
export class EquipeModule { }
