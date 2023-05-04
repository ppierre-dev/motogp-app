import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PiloteService } from '../../services/pilote.service';
import { Observable } from 'rxjs';
import { Pilote } from '../../models/pilote';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pilote-details',
  templateUrl: './pilote-details.component.html',
  styleUrls: ['./pilote-details.component.sass']
})
export class PiloteDetailsComponent implements OnInit {
  piloteId: number;
  pilote$: Observable<Pilote>;
  
  constructor(private route: ActivatedRoute, private piloteService: PiloteService, private location: Location) {
    route.params.subscribe(params => {
      this.piloteId = params['id'];
    })
  }
  ngOnInit(): void {
    if (this.piloteId) {
      this.pilote$ = this.piloteService.getById(this.piloteId);
    }
  }

  goBack() {
    this.location.back();
  }

  showReceivedValue(value: boolean) {
    console.log(value);
  }

}
