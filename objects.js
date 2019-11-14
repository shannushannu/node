//Objects
//Literal method
var user= {
    firstname : "shabbu",
    lastname : "khaleel",
    age:22,
    sayHello:function(){
        return "Hello "+this.firstname+" "+this.lastname;
    }
}
user.middlename="shannukhaleel";
console.log(user.sayHello());
//Constructor Method

function student(fname,lname,age){
    this.fname=fname;
    this.lname=lname;
    this.age=age;

    this.getFullName=function(){
        return this.fname+ " " + this.lname;

    }
}
var f=new student("sss","kkk",22);
console.log(f.getFullName());

//Instance Method :implements inheritance

var shoe={
    gender : 'women',
    size : 6,
    construction : 'slipper'
}
var magicshoe=Object.create(shoe);
console.log(magicshoe.construction);
