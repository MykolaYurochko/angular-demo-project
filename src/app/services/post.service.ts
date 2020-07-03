import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPost } from '../models/Post';
import { IComment } from '../models/Comment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  posts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  showComments(id): Observable<IComment[]> {
    return this.http.get<IComment[]>(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
  }
}
