import { sendResponse } from "../helper";
import GameModel from "../model/game";
import generateGameUid from "./generateGameUid";
import createGameLog from "./createGameLog";

export default async ({ score }) => {
    try {
        const _game = {
            uid: await generateGameUid(),
            scores: [score]
        }

        const gameData = await GameModel.create(_game);
        
        if(gameData) await createGameLog({ gameUid: _game.uid, score });

        return sendResponse(gameData);
    } catch (error) {
        console.error("Err in createGame", error);
    }
}