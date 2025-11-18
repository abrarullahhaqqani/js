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

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));