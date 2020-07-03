import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  showComments(id: number) {
    this.postService.showComments(id).subscribe((data) => {
      console.log(data);
    });
  }
}
