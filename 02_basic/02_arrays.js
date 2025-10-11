const marvel_heros = ['Ironman', 'Caption America', 'Thor'];
const dc_heros = ['Superman', 'Batman', 'Flash'];

marvel_heros.push(dc_heros);

// console.log(marvel_heros); // [ 'Ironman', 'Caption America', 'Thor', [ 'Superman', 'Batman', 'Flash' ] ]
// console.log(marvel_heros[3][1]); // Batman

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); // [ 'Ironman', 'Caption America', 'Thor', 'Superman', 'Batman', 'Flash' ]

const another_all_array = [1, 2, 3, [4, 5, 6], [7, 8, 9]];

const real_another_array = another_all_array.flat(Infinity);
// console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// console.log(Array.isArray("Sonu")); // false
// console.log(Array.from("Sonu")); // [ 'S', 'o', 'n', 'u' ]
// console.log(Array.from({name: 'Sonu'})); // []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]