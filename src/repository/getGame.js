import { sendResponse, sendErrorResponse } from "../helper";
import GameModel from "../model/game";

export default async ({ uid }) => {
    try {
        const gameData = await GameModel.findOne({ uid });

        if(!gameData) return sendErrorResponse("DATA_NOT_FOUND")
        
        return sendResponse(gameData);
    } catch (error) {
        console.error("Err in getGame", error);
    }
}