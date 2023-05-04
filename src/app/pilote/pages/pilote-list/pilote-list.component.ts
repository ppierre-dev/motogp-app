import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Pilote } from '../../models/pilote';
import { PiloteService } from '../../services/pilote.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PiloteFormComponent } from '../../components/pilote-form/pilote-form.component';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { Router } from '@angular/router';
import { SimplePopupComponent } from 'src/app/shared/components/simple-popup/simple-popup.component';

@Component({
  selector: 'app-pilote-list',
  templateUrl: './pilote-list.component.html',
  styleUrls: ['./pilote-list.component.sass']
})
export class PiloteListComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  pilotes$: Observable<Pilote[]>;
  displayedColumns: string[] = ['firstname', 'lastname', 'teamId', 'update', 'delete'];

  constructor(private piloteService: PiloteService, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {    
    this.pilotes$ = this.piloteService.get();
  }

  updateOrCreatePilote(pilote?: Pilote): void {
    const dialogRef = this.dialog.open(PiloteFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: pilote ? false : true,
        pilote: pilote ? pilote : undefined
      }
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.fetchData();
        }
      });
  }

  deletePilote(piloteId?: number): void {
    this.dialog.open(SimplePopupComponent);
  }

  showPiloteDetails(piloteId?: number): void {    
    this.router.navigate(['/pilotes', piloteId]);
  }
}
