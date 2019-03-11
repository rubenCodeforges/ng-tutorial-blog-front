import {NgModule} from '@angular/core';
import {PostService} from './services/PostService';
import {PostResource} from './services/PostResource';
import {PostListModule} from './list/PostListModule';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        PostListModule,
        HttpClientModule,
    ],
    exports: [
        PostListModule
    ],
    declarations: [],
    providers: [
        PostService,
        PostResource
    ],
})
export class BlogModule {
}
