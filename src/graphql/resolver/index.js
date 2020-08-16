// import { getMatches } from '../repository';
import { getGame, createGame, updateGame } from "../../repository";

// const books = [
//     {
//         title: 'JavaScript for Dummies',
//         author: 'Jane Smith',
//     },
//     {
//         title: 'JavaScript Book',
//         author: 'Michael Smith',
//     },
// ];

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