import {NgModule} from '@angular/core';
import {PostListComponent} from './PostListComponent';
import {CommonModule} from '@angular/common';
import {CommonMaterialModules} from '../../../common/material/CommonMaterialModules';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModules
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
