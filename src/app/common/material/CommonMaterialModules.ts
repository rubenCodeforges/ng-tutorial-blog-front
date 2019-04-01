import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatProgressBarModule, MatSnackBarModule,
    MatTableModule,
    MatTooltipModule
} from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatTableModule,
        MatProgressBarModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatButtonModule
    ],
    exports: [
        MatCardModule,
        MatTableModule,
        MatInputModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatIconModule,
        MatDialogModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatButtonModule
    ],
    declarations: [],
    providers: [],
})
export class CommonMaterialModules {
}
