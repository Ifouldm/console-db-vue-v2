export interface ConsoleModel {
    id: string;
    name: string;
    brand: string;
    year: string;
    description: string;
    shortName: string;
}

export interface GameModel {
    gameId: string;
    gameName: string;
    console: string;
    description: string;
    developer: string;
    year: string;
    score: string;
    genre: Array<string>;
    players: number;
}
