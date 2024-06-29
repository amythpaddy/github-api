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
  @Output() changePage = new EventEmitter();
  currentPage = 1;
  get totalPages() {
    return Math.ceil(this.usersData.total_count / 20);
  }

  onUserSelected(user: UserItem) {
    this.userSelected.emit(user);
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.changePage.emit(page);
  }
}
