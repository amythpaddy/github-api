import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RepoItem } from '../../model/repo.data';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserItem } from '../../model/user.data';

@Component({
  selector: 'app-info-popup',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './info-popup.component.html',
  styleUrl: './info-popup.component.css',
})
export class InfoPopupComponent {
  @Input() selectedRepo: RepoItem | undefined;
  @Input() selectedUser: UserItem | undefined;
  @Output() closeThis = new EventEmitter();
  faClose = faClose;

  onCloseThis() {
    this.closeThis.emit();
  }
}
