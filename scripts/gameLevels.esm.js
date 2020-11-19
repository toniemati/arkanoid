export const EMPTY_BLOCK = 99;

export const gameLevels = [
    {
        level: 1,
        numberOfMovements: 30,
        pointsToWin: 7000,
        board: [
            { x: 0, y: 0, kind: 0 },
            { x: 1, y: 0, kind: 0 },
            { x: 2, y: 0, kind: 0 },
            { x: 3, y: 0, kind: 0 },
            { x: 4, y: 0, kind: 0 },
            { x: 5, y: 0, kind: 0 },
            { x: 6, y: 0, kind: 0 },
            { x: 7, y: 0, kind: 0 },
            { x: 0, y: 1, kind: 0 },
            { x: 1, y: 1, kind: 0 },
            { x: 2, y: 1, kind: 0 },
            { x: 3, y: 1, kind: 0 },
            { x: 4, y: 1, kind: 0 },
            { x: 5, y: 1, kind: 0 },
            { x: 6, y: 1, kind: 0 },
            { x: 7, y: 1, kind: 0 },
        ],
    },
    {
        level: 2,
        numberOfMovements: 21,
        pointsToWin: 5500,
        board: [
            { x: 0, y: 0, kind: 1 },
            { x: 1, y: 0, kind: 0 },
            { x: 3, y: 0, kind: 1 },
            { x: 4, y: 0, kind: 0 },
            { x: 6, y: 0, kind: 1 },
            { x: 7, y: 0, kind: 0 },
            { x: 1, y: 1, kind: 1 },
            { x: 2, y: 1, kind: 0 },
            { x: 4, y: 1, kind: 1 },
            { x: 5, y: 1, kind: 0 },
            { x: 7, y: 1, kind: 1 },
        ],
    }
];