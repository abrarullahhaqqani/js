// const marvel_heros=["thor","IronMan","Abrar"]
// const dc_heros=["superman","batman","spiderman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1])
// const new_heros=marvel_heros.concat(dc_heros)
// console.log(new_heros) //concat gives new array and does not modify exiting array

// const Array1 = [1,2,3,4,5];
// const Array2 = [5,6,7,8,9,10];
// const Array3 = [0,0,0];
// const Array4 = [1,3,9,19];
// const concatAll = Array1.concat(Array2, Array3,Array4)
// console.log(concatAll)

// //spread remember like a glass vass dropping from a height
// const new_my_heros=[...marvel_heros,...dc_heros];
// console.log(new_my_heros)

// const another_array=[1,2,3,[4,5],[6,[7,8]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("abrar"))
console.log(Array.from("abrar"))
console.log(Array.from({name:"abrar"}))//Interesting case mate

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))

