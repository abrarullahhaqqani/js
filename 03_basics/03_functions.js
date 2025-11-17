function addTwoNumbers(num1,num2){//function takes parameters
    console.log(num1+num2)
    return num1+num2
}

const res=addTwoNumbers(3,5)//here we give arguments
console.log(res)

function loginUserMessage(username="Abrar"){
    // if(username===undefined){
    //     console.log("Please enter a username")
    //     return
    // }
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())