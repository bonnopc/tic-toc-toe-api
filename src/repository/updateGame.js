import { sendResponse, sendErrorResponse, getGameWinner } from "../helper";
import GameModel from "../model/game";
import generateGameUid from "./generateGameUid";
import createGameLog from "./createGameLog";

export default async ({ uid, score }) => {
    try {
        const _game = await GameModel.findOne({ uid });

        console.log("GAME FOUND ===>", _game)

        if(!_game) return sendErrorResponse("DATA_NOT_FOUND");
        if(_game && (_game.winner || (_game.scores && _game.scores.length >= 9))) return sendErrorResponse("GAME_ALREADY_FINISHED");
        if(
            _game.scores && 
            _game.scores.length && 
            _game.scores.filter(sc => sc.rowIndex === score.rowIndex && sc.colIndex === score.colIndex) &&
            _game.scores.filter(sc => sc.rowIndex === score.rowIndex && sc.colIndex === score.colIndex).length
        ){
            return sendErrorResponse("NOT_ACCEPTABLE");
        }

        const scoresData = [ ..._game.scores, score ] 

        const gameData = await GameModel.findOneAndUpdate(
            { uid }, 
            { 
                $set: {
                    winner: getGameWinner(scoresData),
                    scores: scoresData
                }
            }
        );

        console.log("gameData UPDATED ====>", gameData)

        if(gameData) createGameLog({ gameUid: uid, score })

        return sendResponse(gameData);
    } catch (error) {
        console.error("Err in createGame", error);
    }
}