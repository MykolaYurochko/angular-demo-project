import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../models/Post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css'],
})
export class AllPostsComponent implements OnInit {
  posts: IPost[];
  constructor(private postService: PostService) {
    this.postService.posts().subscribe((data) => (this.posts = data));
  }

  ngOnInit(): void {}
}
