import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'circular-loader',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './circular-loader.component.html',
  styleUrl: './circular-loader.component.css',
})
export class CircularLoaderComponent {
  faSpinner = faSpinner;
}
