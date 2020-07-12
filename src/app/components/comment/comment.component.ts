import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../../models/Comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input()
  comment: IComment;
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}
}
