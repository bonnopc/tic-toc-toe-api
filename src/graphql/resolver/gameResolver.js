import { getGame, createGame, updateGame, getGameLogs } from "../../repository";

export default {
    Query: {
        async game (root, args) {
            return await getGame(args);
        },
        async gameLogs (root, args) {
            return await getGameLogs(args);
        }
    },
    Mutation: {
        async createGame (root, args) {
            return await createGame(args);
        },
        async updateGame (root, args) {
            return await updateGame(args);
        }
    }
};