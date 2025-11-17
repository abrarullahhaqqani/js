//Primitive
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
//Reference / Non primitive types
// Arrays, Objects, Functions

// JS is dynamically typed

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id)
console.log(anotherId)
console.log(id==anotherId)
console.log(id===anotherId)
const b=1n
console.log(typeof b)

const heros=['shaktiman','abrar','absar'];
let myObj={
    name:'abrar',
    age:20,
}

const myFunction=function(){
    console.log("hello world")
}

console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)

//Stack, heap memory
//Primitive types are stored in stack memory
//Reference types are stored in heap memory and reference is stored in stack memory
let myName="abrar"
let anotherName=myName
anotherName="absar"
console.log(myName)
console.log(anotherName)

let userOne={
    name:'abrar',
    age:20
}
let userTwo=userOne
userTwo.name='absar'
console.log(userOne.name)