// generateMoves([x, y]) => List of all possible moves


// BFS to find the shortest path
// queue
// path {x,y => parent} if pair exists already visited
// 
// while (quene.lenth != 0)
//      pop
//      find possible moves
//      enqueu

function Queue() {
    const data = []

    function enqueue(value) {
       data.push(value); 
    }

    function dequeue() {
        return data.shift();
    }

    function isEmpty() {
        return data.length === 0;
    }

    return {
        enqueue,
        dequeue,
        isEmpty,
    }
}

function validMove(x, y) {
    const validX = (0 <= x && x <= 7); 
    const validY = (0 <= y && y <= 7); 

    return validX && validY;
}

function getPossibleMoves(kightX, kightY) {
    const moveSet = [
        [-2,  1], [-2, -1],
        [ 2,  1], [ 2, -1],
        [ 1, -2], [ 1,  2],
        [-1, -2], [-1,  2]
    ]

    const moves = moveSet.map(([x, y]) => [kightX + x, kightY + y]);
    const possibleMoves = moves.filter(([x, y]) => validMove(x, y));

    return possibleMoves;
}

function createPath(prev, target) {
    const result = [];

    for (let at = target; at != null; at = prev[at]) {
        result.push(at);
    }

    return result.reverse();
}

function kightMoves(start, end) {
    const queue = Queue();
    const prev = {};

    prev[start] = null;
    queue.enqueue(start);

    while (!queue.isEmpty()) {
        const cell = queue.dequeue();    
        const moves = getPossibleMoves(...cell);

        if (`${cell}` === `${end}`) break;

        for (let move of moves) {
            // Check if cell was visited
            if (move in prev) continue;
            prev[move] = cell;

            queue.enqueue(move);
        }
    }

    return createPath(prev, end); 
}

module.exports = kightMoves;
