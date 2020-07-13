import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { CommentService } from './services/comment.service';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostsOfUserComponent } from './components/posts-of-user/posts-of-user.component';
import { CommentsOfPostComponent } from './components/comments-of-post/comments-of-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    CommentComponent,
    PostsOfUserComponent,
    CommentsOfPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'users', component: AllUsersComponent },
      { path: 'posts', component: AllPostsComponent },
      { path: 'comments', component: AllCommentsComponent },
      { path: 'users/:id/posts', component: PostsOfUserComponent },
      { path: 'posts/:id/comments', component: CommentsOfPostComponent },
    ]),
  ],
  providers: [PostService, UserService, CommentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
