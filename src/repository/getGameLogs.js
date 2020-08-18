import { sendResponse, sendErrorResponse } from "../helper";
import { GameLogModel } from "../model";

export default async ({ gameUid, pagination }) => {
    try {
        let limit = 10;
        let skip = 0;

        if (pagination) {
            skip = pagination.skip;
            limit = pagination.limit;
        }

        const gameLogsData = await GameLogModel.find({ gameUid }).skip(skip).limit(limit).sort({ createdAt: -1 });

        console.log("gameLogsData", gameLogsData)

        if(!gameLogsData || !gameLogsData.length) return sendErrorResponse("DATA_NOT_FOUND")
        
        return sendResponse(gameLogsData);
    } catch (error) {
        console.error("Err in getGame", error);
    }
}