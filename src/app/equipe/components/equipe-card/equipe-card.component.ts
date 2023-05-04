import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equipe } from '../../models/equipe';

@Component({
  selector: 'app-equipe-card',
  templateUrl: './equipe-card.component.html',
  styleUrls: ['./equipe-card.component.sass']
})
export class EquipeCardComponent implements OnInit {
  @Input() selectedEquipe: Equipe;
  @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.received.emit(true);
  }
}
