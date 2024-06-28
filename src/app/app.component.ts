import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../model/repo.data';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, SearchComponent],
})
export class AppComponent {
  title = 'github-repo-search';

  repoList = signal<string | undefined>(undefined);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  searchText = '';
  apiResult?: Repo;

  // todo: implement a event emitter on search click and move the fetching of data to app component
  onSearchClicked(searchString: string) {
    const subscription = this.httpClient
      .get<Repo>(`https://api.github.com/search/repositories?q=${searchString}`)
      .subscribe({
        next: (resData) => {
          this.apiResult = resData;
          console.log(this.apiResult ?? 'Error fetching data');
        },
      });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
