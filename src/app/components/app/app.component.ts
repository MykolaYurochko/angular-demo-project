import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../../models/User';
import { Post } from '../../models/Post';
@Component({
  selector: 'app-root',
  template: `<h2>Users</h2>
    <app-user *ngFor="let user of users" [user]="user"></app-user>
    <hr />
    <h2>Posts</h2>
    <app-post *ngFor="let post of posts" [post]="post"></app-post>`,
  styles: [
    `
      h2 {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  users: User[];
  posts: Post[];
  comments: any[];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => (this.users = data));

    this.httpClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => (this.posts = data));

    this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe((data) => (this.comments = data));
  }
}
