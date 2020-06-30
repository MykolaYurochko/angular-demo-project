import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../../models/User';
import { Post } from '../../models/Post';
import { Comment } from '../../models/Comment';
@Component({
  selector: 'app-root',
  template: `<h2>Users</h2>
    <app-user *ngFor="let user of users" [user]="user"></app-user>
    <h2>Posts</h2>
    <app-post *ngFor="let post of posts" [post]="post"></app-post>
    <h2>Comments</h2>
    <app-comment *ngFor="let comment of comments" [comment]="comment">
    </app-comment>`,
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
