import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IComment } from '../../models/Comment';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comments-of-post',
  templateUrl: './comments-of-post.component.html',
  styleUrls: ['./comments-of-post.component.css'],
})
export class CommentsOfPostComponent implements OnInit {
  comments: IComment[];
  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((value) => {
      this.postService
        .showComments(value.id)
        .subscribe((comments) => (this.comments = comments));
    });
  }

  ngOnInit(): void {}
}
