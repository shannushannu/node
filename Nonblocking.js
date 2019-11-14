//Non-blocking

function longRunningOperation(){
    setTimeout(function(){
        console.log("Running the operation");
    },3000);
    }

function webRequest(req)
{
    console.log("Starting the operation with Id" + req.id)
    longRunningOperation();
    console.log("Ending the operation with Id" + req.id)
}
// webRequest({id : 1})
// webRequest({id : 2})
var arr=["shannukhaleel",true,32,function(){console.log("Hiii")},{name : "shannukhaleel"}];
arr[3]();

