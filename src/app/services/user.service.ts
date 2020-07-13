import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IUser } from '../models/User';
import { IPost } from '../models/Post';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  users(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.baseUrl}/users`);
  }

  postsOfUser(id): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${environment.baseUrl}/posts?userId=${id}`);
  }
}
