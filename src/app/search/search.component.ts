import { HttpClient } from '@angular/common/http';
import {
  Component,
  DestroyRef,
  EventEmitter,
  Output,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Repo } from '../../model/repo.data';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  faSearch = faSearch;
  @Output() searchFor = new EventEmitter();
  searchText = '';

  // todo: implement a event emitter on search click and move the fetching of data to app component
  onSearchClicked() {
    this.searchFor.emit(this.searchText);
  }
}
