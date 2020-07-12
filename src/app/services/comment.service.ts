import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComment } from '../models/Comment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}
  comments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }
}
