import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Equipe } from '../../models/equipe';
import { EquipeService } from '../../services/equipe.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EquipeFormComponent } from '../../components/equipe-form/equipe-form.component';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.sass']
})
export class EquipeListComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  equipes$: Observable<Equipe[]>;
  displayedColumns: string[] = ['name', 'sponsor', 'update', 'delete'];

  constructor(private equipeService: EquipeService, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.equipes$ = this.equipeService.get();
  }

  updateOrCreateEquipe(equipe?: Equipe): void {
    const dialogRef = this.dialog.open(EquipeFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: equipe ? false : true,
        equipe: equipe ? equipe : undefined
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

  deleteEquipe(equipeId?: number): void {
    const ref = this.dialog.open(GenericPopupComponent, {
      data: {
        title: 'Confirmation de suppression',
        message: 'êtes-vous sûr de vouloir supprimer cette équipe ?',
        typeMessage: 'none',
        yesButtonVisible: true,
        noButtonVisible: true,
        cancelButtonVisible: false,
        defaultButton: 'No',
        yesButtonLabel: 'Oui',
        noButtonLabel: 'Non',
      },
    })

    ref.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.equipeService.delete(equipeId)
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
              this._snackBar.open(result, '', {
                duration: 2000,
                panelClass: ['bg-success']
              });
              this.fetchData();
            });
        }
      });
  }

  showEquipeDetails(equipeId?: number): void {    
    this.router.navigate(['/equipes', equipeId]);
  }
}
