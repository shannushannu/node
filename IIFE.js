//IIFE
(
    function(){
        console.log("IIFE here...")
    }
)();

//Lexical scoping

var x=10;
function b(){
    console.log(x);
}
function a()
{
    var x=20;
    b();
}
a();