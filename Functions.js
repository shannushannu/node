//var addition =function add(num1 , num2){
//    return num1 + num2; 
//}
//console.log(addition(3,5));
//console.log(addition);

//Nested Functions
function mystery(){
    function choosenumber(){
        return 5;
    }
    return choosenumber;
    function choosenumber(){
        return 10;
    }
}
var nestedFunc=mystery();
console.log(nestedFunc());
