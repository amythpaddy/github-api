import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RepoItem, Repo } from '../../model/repo.data';

@Component({
  selector: 'app-repos',
  standalone: true,
  imports: [],
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.css',
})
export class ReposComponent {
  @Input({ required: true }) reposData!: Repo;
  @Output() repoSelected = new EventEmitter();

  onRepoSelected(repo: RepoItem) {
    this.repoSelected.emit(repo);
  }
}
