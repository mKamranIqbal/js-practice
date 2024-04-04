const marvel_heros = ['thor', 'ironman', 'spiderman']

const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros) 

// console.log(marvel_heros)
 //output [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


//  const newarr = marvel_heros.concat(dc_heros)
//  console.log(newarr)

// const allNew = [...marvel_heros, ...dc_heros]
// console.log(allNew)

// const multi_level_array = [1,2,3, [5,6,7],8,2,[5,7,[6,7,8]]]
// console.log(multi_level_array.flat(Infinity))

// console.log(Array.isArray("kamran"))
// console.log(Array.isArray(dc_heros))
// console.log(Array.from("kamran"))
// console.log(Array.from({name:"karman", age : 32}))  // interesting

// console.log(Array.of("IQbal"))

let score1 = 100
let score2 = 200
let score3 = 300

let arr = Array.of(score1, score2, score3)

console.log(Array.isArray(arr))



