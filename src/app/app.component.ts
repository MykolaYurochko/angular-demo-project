import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { IUser } from './models/User';
import { IPost } from './models/Post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: IUser[];
  posts: IPost[];
  constructor(
    private userService: UserService,
    private postService: PostService
  ) {
    this.userService.users().subscribe((data) => (this.users = data));
    this.postService.posts().subscribe((data) => (this.posts = data));
  }
}
