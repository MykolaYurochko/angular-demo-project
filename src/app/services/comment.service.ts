import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComment } from '../models/Comment';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}
  comments(): Observable<IComment[]> {
    const { baseUrl } = environment;
    return this.http.get<IComment[]>(`${baseUrl}/comments`);
  }
}
