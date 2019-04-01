import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {PostsModule} from './posts/PostsModule';
import {ConfirmationDialogComponent} from './dialogs/ConfirmationDialogComponent';
import {CommonMaterialModules} from '../common/material/CommonMaterialModules';

@NgModule({
    imports: [
        PostsModule,
        HttpClientModule,
        CommonMaterialModules,
    ],
    exports: [
        PostsModule,
        CommonMaterialModules
    ],
    declarations: [
        ConfirmationDialogComponent
    ],
    entryComponents: [
        ConfirmationDialogComponent
    ]
})
export class BlogModule {
}
