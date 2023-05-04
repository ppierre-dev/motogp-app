import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipeService } from '../../services/equipe.service';
import { Observable } from 'rxjs';
import { Equipe } from '../../models/equipe';
import { Location } from '@angular/common';

@Component({
  selector: 'app-equipe-details',
  templateUrl: './equipe-details.component.html',
  styleUrls: ['./equipe-details.component.sass']
})
export class EquipeDetailsComponent implements OnInit {
  equipeId: number;
  equipe$: Observable<Equipe>;
  
  constructor(private route: ActivatedRoute, private equipeService: EquipeService, private location: Location) {
    route.params.subscribe(params => {
      this.equipeId = params['id'];
    })
  }
  ngOnInit(): void {
    if (this.equipeId) {
      this.equipe$ = this.equipeService.getById(this.equipeId);
    }
  }

  goBack() {
    this.location.back();
  }

  showReceivedValue(value: boolean) {
    console.log(value);
  }

}
