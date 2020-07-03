import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  showDetails(id: number) {
    this.userService.postsOfUser(id).subscribe((data) => {
      console.log(data);
    });
  }
}
