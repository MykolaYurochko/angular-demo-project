import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/User';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  users: IUser[];
  constructor(private userService: UserService) {
    this.userService.users().subscribe((data) => (this.users = data));
  }

  ngOnInit(): void {}
}
