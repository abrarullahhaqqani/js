//Immediately Invoked Function Expressions (IIFE)
//used in order to make sure the globa scope pollution does not happen
(function chai(){
    //named IIFE
    console.log("Chai connected")
})();

((name)=>{
    console.log(`DB Connected with the help of ${name}`)
})('abrar');