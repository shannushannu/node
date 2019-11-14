var numbers=[1,2,3,4,5];
//ES5
var doublevalue = numbers.map(function(value)
{
    return value * 2;
})
//ES6
var triplevalue = numbers.map(value => value * 3);
console.log(triplevalue);

//Example 2
var numbers=[1,2,3,4,5];
//ES5
var doublevalue = numbers.map(function(value, index,arr){
   console.log(index);
   return value * 2;
})

//ES6
var quardvalue=numbers.map(value=>value * 4);

var triplevalue = numbers.map((value,index) => {
    console.log(index);
    return value * 2;
})

console.log(triplevalue);

//Replace function expressions with arrow functions in the code:
var ask(question,yes,no)=>{
    if(confirm(question)) yes()
    else no();
}
ask(
    "Do you agree?",
    ()=>{alert("You agreed.");},
    ()=>{ alert("You cancelled the execution."); }
);