import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { User } from './models/User';
import { Post } from './models/Post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: User[];
  posts: Post[];
  constructor(
    private userService: UserService,
    private postService: PostService
  ) {
    this.userService.users().subscribe((data) => (this.users = data));
    this.postService.posts().subscribe((data) => (this.posts = data));
  }
}
