import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HttpClient } from '@angular/common/http';
import { RepoItem, Repo } from '../model/repo.data';
import { ReposComponent } from './repos/repos.component';
import { InfoPopupComponent } from './info-popup/info-popup.component';
import { User, UserItem } from '../model/user.data';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    SearchComponent,
    ReposComponent,
    InfoPopupComponent,
    UsersComponent,
  ],
})
export class AppComponent {
  title = 'github-repo-search';

  repoApiResult = signal<Repo | undefined>(undefined);
  userApiResult = signal<User | undefined>(undefined);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  searchText = '';
  selectedRepo = signal<RepoItem | undefined>(undefined);
  selectedUser = signal<UserItem | undefined>(undefined);

  onSearchClicked(searchString: string) {
    this.searchForRepository(searchString);
    this.searchForUser(searchString);
  }

  searchForRepository(searchString: string) {
    const subscription = this.httpClient
      .get<Repo>(`https://api.github.com/search/repositories?q=${searchString}`)
      .subscribe({
        next: (resData) => {
          this.repoApiResult.set(resData);
        },
      });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  searchForUser(searchString: string) {
    const subscription = this.httpClient
      .get<User>(`https://api.github.com/search/users?q=${searchString}`)
      .subscribe({
        next: (resData) => {
          this.userApiResult.set(resData);
        },
      });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onRepoSelected(selectedItem: RepoItem) {
    this.selectedRepo.set(selectedItem);
  }
  onUserSelected(selectedItem: UserItem) {
    this.selectedUser.set(selectedItem);
  }

  clearSelectedItem() {
    this.selectedRepo.set(undefined);
    this.selectedUser.set(undefined);
  }
}
