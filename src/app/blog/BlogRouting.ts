import {Route} from '@angular/router';
import {PostListComponent} from './posts/list/PostListComponent';
import {BlogGuard} from './guards/BlogGuard';

export const BlogRouting: Route[] = [
    {
        path: 'blog', children: [
            {path: 'list', component: PostListComponent, canActivate: [BlogGuard]}
        ]
    }
];
