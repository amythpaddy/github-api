import { Component, Input } from '@angular/core';
import { Item } from '../../model/repo.data';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-info-popup',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './info-popup.component.html',
  styleUrl: './info-popup.component.css',
})
export class InfoPopupComponent {
  @Input() repoInfo: Item | undefined;
  faClose = faClose;
}
