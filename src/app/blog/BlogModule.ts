import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {PostsModule} from './posts/PostsModule';

@NgModule({
    imports: [
        PostsModule,
        HttpClientModule,
    ],
    exports: [
        PostsModule
    ],
    declarations: [],
})
export class BlogModule {
}
