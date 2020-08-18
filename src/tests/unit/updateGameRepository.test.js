const { default: updateGame } = require("../../repository/updateGame")

describe("updateGame() repository function", () => {
    it("should return 404 statusCode for invalid uID", () => {
        // Testing a wrong patterned UID
        expect(updateGame({ uid: "GKL-TE", score: { rowIndex: 0, colIndex: 3, value: "O" } })).toMatchObject({ statusCode: 404 });
    })
})