import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PostDto} from './dataModel/PostDto';
import {PostResource} from './PostResource';
import {CreatePostDto} from './dataModel/CreatePostDto';

@Injectable()
export class PostService {

    constructor(private postResource: PostResource) {
    }

    public getAllPostItems(): Observable<PostDto[]> {
        return this.postResource.findAll();
    }

    public createPost(createPostDto: CreatePostDto): Observable<PostDto> {
        return this.postResource.create(createPostDto);
    }
}
