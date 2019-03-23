import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatProgressBarModule,
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
        MatButtonModule
    ],
    declarations: [],
    providers: [],
})
export class CommonMaterialModules {
}
