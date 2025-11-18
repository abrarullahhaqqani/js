//Immediately Invoked Function Expressions (IIFE)
(function chai(){
    //named IIFE
    console.log("Chai connected")
})();

((name)=>{
    console.log(`DB Connected with the help of ${name}`)
})('abrar');