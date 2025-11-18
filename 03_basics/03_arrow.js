// const user={
//     username:"Abrar",
//     price:1000,
//     welcomeMessage:function(){
//         console.log(`${this.username} welcome to the course`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username="Abnu"
// user.welcomeMessage()
// console.log(this)
// function chai(){
//     let username="abrar"
//     console.log(this.username)
// }
// chai() this.username not working in normal fn bur works in object
const chai=()=>{
    let username="abrar"
    console.log(this)
}
chai()

// const addTwo=(n1,n2)=>{
//     return n1+n2
// }

// const addTwo=(n1,n2)=>n1+n2
// const addTwo=(n1,n2)=>(n1+n2)
const addTwo=(n1,n2)=>({username:"abrar"})

console.log(addTwo(3,4))