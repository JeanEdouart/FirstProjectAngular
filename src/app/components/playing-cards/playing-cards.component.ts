import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playing-cards',
  standalone: true,
  imports: [],
  templateUrl: './playing-cards.component.html',
  styleUrl: './playing-cards.component.css'
})
export class PlayingCardsComponent {

  @Input() name: string = "Picolas Norot";
  @Input() hp: number = 40;
  @Input() figureCaption: string = "N°001 - Roblox Kids";
  @Input() attackName: string = "Coulante";
  @Input() attackStrength: number = 60;
  @Input() attackDescription: string = "Picolas Norot lance une coulante sur son adversaire, lui infligeant de lourds dégâts.";
  @Input() imageUrl: string = "img/PicolasNorot.jpg";
}
