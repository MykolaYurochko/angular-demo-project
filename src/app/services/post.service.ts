import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IPost } from '../models/Post';
import { IComment } from '../models/Comment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  posts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${environment.baseUrl}/posts`);
  }

  showComments(id): Observable<IComment[]> {
    return this.http.get<IComment[]>(
      `${environment.baseUrl}/comments?postId=${id}`
    );
  }
}
