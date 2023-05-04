import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pilote } from '../../models/pilote';

@Component({
  selector: 'app-pilote-card',
  templateUrl: './pilote-card.component.html',
  styleUrls: ['./pilote-card.component.sass']
})
export class PiloteCardComponent implements OnInit {
  @Input() selectedPilote: Pilote;
  @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.received.emit(true);
  }
}
