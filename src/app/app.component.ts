import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from './models/User';
import { Post } from './models/Post';
import { Comment } from './models/Comment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [``],
})
export class AppComponent {
  users: User[];
  posts: Post[];
  comments: Comment[];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => (this.users = data));

    this.httpClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => (this.posts = data));

    this.httpClient
      .get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe((data) => (this.comments = data));
  }
}
