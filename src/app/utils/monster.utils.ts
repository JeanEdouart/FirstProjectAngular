export enum MonsterType{
    PLANT = "plant",
    FIRE = "fire",
    WATER = "water",
    ELECTRIC = "electric",
}

export interface IMonsterProperties{
    imageUrl: string;
    color:string;
}

export const MonsterTypeProperties: Record<MonsterType, IMonsterProperties> = {
    [MonsterType.PLANT]: {
        imageUrl: 'img/plant.png',
        color: 'green',
    },
    [MonsterType.FIRE]: {
        imageUrl: 'img/fire.png',
        color: 'red',
    },
    [MonsterType.WATER]: {
        imageUrl: 'img/water.png',
        color: 'blue',
    },
    [MonsterType.ELECTRIC]: {
        imageUrl: 'img/electric.png',
        color: 'yellow',
    },
};