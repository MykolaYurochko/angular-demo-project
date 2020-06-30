import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../../models/User';
@Component({
  selector: 'app-root',
  template: `<h2>Hello</h2>
    <app-user *ngFor="let u of users" [user]="u"></app-user>`,
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
  posts: any[];
  comments: any[];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => (this.users = data));

    this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => (this.posts = data));

    this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe((data) => (this.comments = data));
  }
}
