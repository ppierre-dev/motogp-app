import { PiloteService } from '../../services/pilote.service';
import { Pilote } from '../../models/pilote';
import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PiloteFormData {
  isCreateForm: boolean;
  pilote: Pilote;
}

@Component({
  selector: 'app-pilote-form',
  templateUrl: './pilote-form.component.html',
  styleUrls: ['./pilote-form.component.scss']
})
export class PiloteFormComponent implements OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  piloteForm = this.fb.group({
    id: [0, [Validators.required]],
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    number: [0, [Validators.required]],
    motoId: [0, [Validators.required]],
    weight: [0, [Validators.required]],
    height: [0, [Validators.required]],
    teamId: ['', [Validators.required]]
  });

  constructor(public dialogRef: MatDialogRef<PiloteFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PiloteFormData, private fb: FormBuilder,
    private piloteService: PiloteService, private _snackBar: MatSnackBar) {

    if (!data.isCreateForm) {
      this.setPiloteForm(data.pilote);
    }

  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  setPiloteForm(pilote: Pilote) {
    this.piloteForm.setValue({
      id: pilote.id,
      firstname: pilote.firstname,
      lastname: pilote.lastname,
      number: pilote.number,
      motoId: pilote.motoId,
      weight: pilote.weight,
      height: pilote.height,
      teamId: pilote.teamId
    });
  }

  get title() {
    if (this.data.isCreateForm) {
      return 'Formulaire de création';
    }
    return 'Formulaire de modification';
  }

  get submitBtnName() {
    if (this.data.isCreateForm) {
      return 'Ajouter';
    }
    return 'Modifier';
  }

  onSubmit() {
    if (this.piloteForm.valid) {
      if (this.data.isCreateForm) {
        this.piloteForm.value.id = Date.now() + Math.random();
        this.piloteService.create(this.piloteForm.value as Pilote)
          .pipe(takeUntil(this.destroy$))
          .subscribe(result => {
            this._snackBar.open(result, '', {
              duration: 2000,
              panelClass: ['bg-success']
            });

            this.dialogRef.close(true);
          });
      } else {
        this.piloteService.update(this.piloteForm.value as Pilote)
          .pipe(takeUntil(this.destroy$))
          .subscribe(result => {
            this._snackBar.open(result, '', {
              duration: 2000,
              panelClass: ['bg-success']
            });
            this.dialogRef.close(true);
          });
      }
    }
  }
}