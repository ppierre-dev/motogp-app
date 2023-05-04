import { EquipeService } from '../../services/equipe.service';
import { Equipe } from '../../models/equipe';
import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface EquipeFormData {
  isCreateForm: boolean;
  equipe: Equipe;
}

@Component({
  selector: 'app-equipe-form',
  templateUrl: './equipe-form.component.html',
  styleUrls: ['./equipe-form.component.scss']
})
export class EquipeFormComponent implements OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  equipeForm = this.fb.group({
    id: [0, [Validators.required]],
    name: ['', [Validators.required]],
    sponsor: ['', [Validators.required]],
  });

  constructor(public dialogRef: MatDialogRef<EquipeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EquipeFormData, private fb: FormBuilder,
    private equipeService: EquipeService, private _snackBar: MatSnackBar) {

    if (!data.isCreateForm) {
      this.setEquipeForm(data.equipe);
    }

  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  setEquipeForm(equipe: Equipe) {
    this.equipeForm.setValue({
      id: equipe.id,
      name: equipe.name,
      sponsor: equipe.sponsor,
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
    if (this.equipeForm.valid) {
      if (this.data.isCreateForm) {
        this.equipeForm.value.id = Date.now() + Math.random();
        this.equipeService.create(this.equipeForm.value as Equipe)
          .pipe(takeUntil(this.destroy$))
          .subscribe(result => {
            this._snackBar.open(result, '', {
              duration: 2000,
              panelClass: ['bg-success']
            });

            this.dialogRef.close(true);
          });
      } else {
        this.equipeService.update(this.equipeForm.value as Equipe)
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