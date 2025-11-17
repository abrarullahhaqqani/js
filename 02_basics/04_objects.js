// // const tinderUser=new Object()//this is singleton object
// // const tinderUser={}//this is non singleton object
const tinderUser={}
tinderUser.id="129217"
tinderUser.name="abrar"
tinderUser.loggedIn=false
// console.log(tinderUser)
// const regularUser={
//     email:"sam@gmail.com",
//     fullName:{
//         userfullname:{
//             firstname:"abrar",
//             lastname:"haqqani"
//         }
//     }
// }

// console.log(regularUser.fullName?.userfullname.firstname)
// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// // const obj3={obj1,obj2}
// // const obj4=Object.assign({0:"b"},obj1,obj2)//Source to target jaa raha hai
// // console.log(obj3)
// // console.log(obj4)
// const obj3={...obj1,...obj2}
// console.log(obj3)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('ide'))