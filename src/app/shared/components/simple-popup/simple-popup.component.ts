import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'simple-popup.component',
  templateUrl: 'simple-popup.component.html',
  styleUrls: ['simple-popup.component.scss']
})
export class SimplePopupComponent {
  constructor(public dialogRef: MatDialogRef<SimplePopupComponent>) {}
}