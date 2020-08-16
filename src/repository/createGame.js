import { sendResponse, sendErrorResponse } from "../helper";
import { GameModel, GameLogModel } from "../model";
import generateGameUid from "./generateGameUid";

export default async ({ score }) => {
    try {
        return []
        // const _game = {
        //     uid: await generateGameUid(),
        //     ...game
        // }
    } catch (error) {
        console.error("Err in createGame", error);
    }
}