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
  @Output() changePage = new EventEmitter();
  currentPage = 1;
  get totalPages() {
    return Math.ceil(this.reposData.total_count / 20);
  }

  onRepoSelected(repo: RepoItem) {
    this.repoSelected.emit(repo);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.changePage.emit(page);
  }
}
