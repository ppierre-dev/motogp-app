import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PiloteRoutingModule } from './pilote-routing.module';
import { PiloteComponent } from './pilote.component';
import { SharedModule } from '../shared/shared.module';
import { PiloteListComponent } from './pages/pilote-list/pilote-list.component';
import { PiloteService } from './services/pilote.service';
import { PiloteFormComponent } from './components/pilote-form/pilote-form.component';
import { PiloteDetailsComponent } from './pages/pilote-details/pilote-details.component';
import { PiloteCardComponent } from './components/pilote-card/pilote-card.component';


@NgModule({
  declarations: [
    PiloteComponent,
    PiloteListComponent,
    PiloteFormComponent,
    PiloteDetailsComponent,
    PiloteCardComponent
  ],
  providers: [
    PiloteService
  ],
  imports: [
    CommonModule,
    PiloteRoutingModule,
    SharedModule,
  ]
})
export class PiloteModule { }
