import { sendResponse, sendErrorResponse, getGameWinner } from "../helper";
import { GameModel } from "../model";
import createGameLog from "./createGameLog";

export default async ({ uid, score }) => {
    try {
        const _game = await GameModel.findOne({ uid });

        if(!_game) return sendErrorResponse("DATA_NOT_FOUND");
        else if(_game && (_game.winner || (_game.scores && _game.scores.length >= 9))) return sendErrorResponse("GAME_ALREADY_FINISHED");
        else if(
            _game.scores && 
            _game.scores.length && 
            _game.scores.filter(sc => sc.rowIndex === score.rowIndex && sc.colIndex === score.colIndex) &&
            _game.scores.filter(sc => sc.rowIndex === score.rowIndex && sc.colIndex === score.colIndex).length
        ){
            return sendErrorResponse("NOT_ACCEPTABLE");
        }

        const scoresData = [ ..._game.scores, score ];

        const gameData = await GameModel.findOneAndUpdate(
            { uid }, 
            { $set: {
                winner: getGameWinner(scoresData),
                scores: scoresData
            }},
            { new: true }
        );

        if(gameData) createGameLog({ gameUid: uid, score })

        return sendResponse(gameData);
    } catch (error) {
        console.error("Err in updateGame", error);
    }
}