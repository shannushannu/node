//HOF
function greet(){
    console.log("HELLOOOOO...")
}
function sayHello(arr,cb){
    if(arr.length > 2)
    {
        cb("Greater than 2")
    }else{
    cb("Less than 2")
}
}
sayHello([1,4],greet)