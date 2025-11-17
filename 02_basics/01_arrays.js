//arrays
const myArr=[0,1,2,3,4,5,true,"abrar"]//zero indexed
//Shallow copy( Same reference in memory)
const myHeros=["shaktiman","naagraj","doga"]
const myArr1=new Array(1,2,3,4,5)
// // console.log(myArr1[0])
// // //Array Methods
// // myArr1.push(6)
// // myArr1.push(7)
// // myArr1.pop()
// myArr1.unshift(0)//adds element at start
// console.log(myArr1)

// myArr1.shift()//removes element from start
// console.log(myArr1)

// console.log(myArr1.indexOf(3))

// console.log(myArr1.includes(5))

// const newArr=myArr1.join("_")//creates string from array
// console.log(newArr)
//Difference between splice and slice
const spliceArr=myArr1.splice(1,3)//modifies original array
console.log(spliceArr)//1,2,3,4,5
console.log(myArr1)
//1,5
const sliceArr=myArr1.slice(1,4)//does not modify original array//5
console.log(sliceArr)//5
console.log(myArr1)//1,5

//Bhai Splice modifies original array and Slice does not modify original array