import { CommonModule } from '@angular/common';
import { Component, model, computed} from '@angular/core';
import { PlayingCardsComponent } from './components/playing-cards/playing-cards.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MonsterType } from './utils/monster.utils';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardsComponent, CommonModule, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  monsters!: Monster[];
  search = model('')

  filteredMonsters = computed(() => {
    return this.monsters.filter(monster => monster.name.includes(this.search()));
  })

  constructor() {

    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = "Dracaufeu";
    monster1.image = "img/dracaufeu.png";
    monster1.type = MonsterType.FIRE;
    monster1.hp = 80;
    monster1.figureCaption = "N°002 - Dragon de Feu";
    monster1.attackName = "Flamme";
    monster1.attackStrength = 70;
    monster1.attackDescription = "Dracaufeu crache une flamme ardente sur son adversaire. Inflige de lourds dégâts.";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Pikachu";
    monster2.image = "img/pikachu.jpg";
    monster2.type = MonsterType.ELECTRIC;
    monster2.hp = 40;
    monster2.figureCaption = "N°001 - Souris Electrique";
    monster2.attackName = "Eclair";
    monster2.attackStrength = 50;
    monster2.attackDescription = "Pikachu lance une attaque éclair sur son adversaire, lui infligeant de lourds dégâts.";
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.name = "Bulbizarre";
    monster3.image = "img/bulbizarre.png";
    monster3.type = MonsterType.PLANT;
    monster3.hp = 60;
    monster3.figureCaption = "N°003 - Bulbizarre";
    monster3.attackName = "Fouet Lianes";
    monster3.attackStrength = 40;
    monster3.attackDescription = "Bulbizarre utilise son fouet lianes pour attaquer son adversaire, lui infligeant de lourds dégâts.";
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.name = "Tortank";
    monster4.image = "img/tortank.jpg";
    monster4.type = MonsterType.WATER;
    monster4.hp = 50;
    monster4.figureCaption = "N°004 - Tortank";
    monster4.attackName = "Pistolet à O";
    monster4.attackStrength = 60;
    monster4.attackDescription = "Tortank tire un puissant jet d'eau sur son adversaire, lui infligeant de lourds dégâts.";
    this.monsters.push(monster4);
  }
}
