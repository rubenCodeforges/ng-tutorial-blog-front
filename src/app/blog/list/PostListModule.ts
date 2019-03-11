import {NgModule} from '@angular/core';
import {PostListComponent} from './PostListComponent';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [
        PostListComponent
    ],
    declarations: [
        PostListComponent
    ],
    providers: [],
})
export class PostListModule {
}
