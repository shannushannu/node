// function demo(fname,...args){
//     console.log(args[0]);
// }
// demo("sss")
// demo("sss","kkk")
// demo("sss","kkk",22)

// let arr=[3,4,5];
// let newArr=[1,2,...arr,6,7];
// console.log(newArr);


//Destructuring

let arr=["sss","kkk","shabbu","khaleel"];
let [arr1,arr2,arr3]=arr;
console.log(arr3);
//Example 2
let mymodule={
    drawText: text => console.log("Drawing" +text),
    drawCircle:r=>console.log(Math.PI*r*r),
    drawRect:(w,l)=> console.log(2*w*1)
}
let {drawCircle:dc, drawText:dt}=mymodule;
dc(3);
dt("sampletext");

let user={
    fname:"sss",
    lname:"kkk",
    address:{
        street:"222 Main Road",
        city: "Hyderabad"
    },
    hobbies: ["sports","surfing","planting"]
}

let{
    fname:fn,
    lname:ln,
    address:{street :st,city:c},
    hobbies:[h1,h2,h3,h4="Football"]}=user;

    console.log(fn,ln,st,c,h1,h2,h3,h4);

//Template strings:

let fruit="Orange";
console.log(`I Like ${fruit}!`);
