import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/User';
import { IPost } from '../models/Post';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  users(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  postsOfUser(id): Observable<IPost[]> {
    return this.http.get<IPost[]>(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
  }
}
