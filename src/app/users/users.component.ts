import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserItem } from '../../model/user.data';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input({ required: true }) usersData!: User;
  @Output() userSelected = new EventEmitter();

  onUserSelected(user: UserItem) {
    this.userSelected.emit(user);
  }
}
