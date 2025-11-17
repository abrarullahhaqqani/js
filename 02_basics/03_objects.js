//singleton
//Object.create
//object literals
const mySym=Symbol("key1")
const JsUser={
    name:"Abrar",
    [mySym]:"mykey1",
    age:20,
    Location:"Hyderabad",
    email:"abrarullah.swe@gmail.com",
    lastLogin:["Sunday","Friday"]
}

// console.log(JsUser.Location)
// console.log(JsUser["lastLogin"])
// console.log(JsUser[mySym]) //how symbols are printed
// JsUser.email="abrarullah.haqqani@okta.com"
// Object.freeze(JsUser)
// JsUser.email="abrarullah.haqqani@servicenow.com"
// console.log(JsUser)

JsUser.greeting=function(){
    console.log("Assalamualaikum")
}
JsUser.greetingtwo=function(){
    console.log(`Assalamualaikum ${this.name}, Are you from ${this.Location}?`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo());