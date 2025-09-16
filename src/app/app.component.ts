import { Component } from '@angular/core';
import { PlayingCardsComponent } from './components/playing-cards/playing-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
