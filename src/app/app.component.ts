import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HttpClient } from '@angular/common/http';
import { Item, Repo } from '../model/repo.data';
import { ReposComponent } from './repos/repos.component';
import { InfoPopupComponent } from './info-popup/info-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, SearchComponent, ReposComponent, InfoPopupComponent],
})
export class AppComponent {
  title = 'github-repo-search';

  apiResult = signal<Repo | undefined>(undefined);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  searchText = '';
  selectedItem = signal<Item | undefined>(undefined);

  onSearchClicked(searchString: string) {
    const subscription = this.httpClient
      .get<Repo>(`https://api.github.com/search/repositories?q=${searchString}`)
      .subscribe({
        next: (resData) => {
          this.apiResult.set(resData);
        },
      });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onRepoSelected(repo: Item) {
    this.selectedItem.set(repo);
  }

  clearSelectedItem() {
    this.selectedItem.set(undefined);
  }
}
