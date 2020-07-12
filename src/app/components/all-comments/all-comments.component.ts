import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { IComment } from '../../models/Comment';
@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css'],
})
export class AllCommentsComponent implements OnInit {
  comments: IComment[];
  constructor(private commentService: CommentService) {
    this.commentService.comments().subscribe((data) => (this.comments = data));
  }

  ngOnInit(): void {}
}
