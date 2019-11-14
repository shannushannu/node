//Prototyping : Extending string constructor
var str1="Welcome to javascript";
var str2="Node js training";
String.prototype.countLetter=function(letter){
    var counter=0;
    for(var i=0;i<this.length;i++){
        if(this.charAt(i).toUpperCase()==letter.toUpperCase()){
            counter++;
        }
    }
    return counter;
}
console.log("Occurance :",str1.countLetter("e"));
console.log("Occurance :",str2.countLetter("a"));