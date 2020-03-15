const double = n => n.points * 2;

const doubleMap = number => number.map(double);

console.log(doubleMap([
    { name: 'ball', points: 2 },
    { name: 'coin', points: 3},
    { name: 'candy', points: 4}
]));