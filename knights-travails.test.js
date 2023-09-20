const knightMoves = require('./knights-travails.js');

test("Test 1", () => {
    const result = knightMoves([0, 0], [1, 2]);
    expect(result).toStrictEqual([[0, 0], [1, 2]])
});

test("Test 2", () => {
    const result = knightMoves([3, 3], [0, 0]);
    expect(result).toStrictEqual([[3, 3], [1, 2], [0, 0]])
});

test("Test 3", () => {
    const result = knightMoves([0, 0], [3, 3]);
    console.log(result);
    expect(result).toStrictEqual([[0, 0], [2, 1], [3, 3]])
});
