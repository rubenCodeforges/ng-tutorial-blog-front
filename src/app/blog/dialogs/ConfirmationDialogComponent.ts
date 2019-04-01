import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-confirmation-dialog',
    template: `
        <h1 mat-dialog-title>Confirm your action!</h1>
        <div>
            <p>Are you sure you want to continue ?</p>
        </div>
        <div mat-dialog-actions>
            <button mat-button mat-dialog-close>Cancel</button>
            <button mat-button
                    type="button"
                    (click)="submit()"
                    color="warn">
                Continue
            </button>
        </div>`
})

export class ConfirmationDialogComponent {
    constructor(private dialogRef: MatDialogRef<void>) {
    }

    public submit() {
        this.dialogRef.close(true);
    }
}
