import { getGame, createGame, updateGame } from "../../repository";

export default {
    Query: {
        async game (root, args) {
            return await getGame(args);
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