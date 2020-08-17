import { GameLogModel } from "../model";

export default async ({ gameUid, score }) => {
    try {
        const gameLog = { gameUid, ...score };

        const gameLogData = await GameLogModel.create(gameLog);

        return gameLogData
    } catch (error) {
        console.error("Err in createGameLog", error);
    }
}