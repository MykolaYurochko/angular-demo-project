import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IPost } from '../../models/Post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.css'],
})
export class PostsOfUserComponent implements OnInit {
  posts: IPost[];
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((value) => {
      this.userService
        .postsOfUser(value.id)
        .subscribe((posts) => (this.posts = posts));
    });
  }

  ngOnInit(): void {}
}
