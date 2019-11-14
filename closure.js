//Cloures:
 function testClosure(){
     var x=4;

     return function(){
         return ++x;
     }
 }
 var nestFunc=testClosure();
 console.log(nestFunc());
 console.log(nestFunc());
 console.log(nestFunc());
 console.log(nestFunc());

 //Example 2
 function buildTicket(transport){
     var numOfpass=0;
     return function(name){
         return "Hello "+name+"! \n"+
         "You are goig  via "+transport +"\n" +
         "Your Ticket ID #"+(++numOfpass);
     }
 }
 var ship=buildTicket("ship");
 console.log(ship("Foo"));
 console.log(ship("Bar"));

 var car=buildTicket("car");
 console.log(car("Baz"));