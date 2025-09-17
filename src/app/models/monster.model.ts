import { MonsterType } from "../utils/monster.utils";

export class Monster {
    name: string = "Picolas Norot";
    image: string = "img/pikachu.jpg";
    type: MonsterType = MonsterType.ELECTRIC;
    hp: number = 40;
    figureCaption: string = "N°001 - Roblox Kids";
    attackName: string = "Coulante";
    attackStrength: number = 60;
    attackDescription: string = "Picolas Norot lance une coulante sur son adversaire, lui infligeant de lourds dégâts.";

}