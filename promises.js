// PROMISES

var promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(new Error("Something Bad Happened!"));
    }, 2000);
    // setTimeout(() => {
    //     resolve("Promise resolved Successfully")
    // }, 3000)
})


promise.then(response => {
    console.log("[RESPONSE] ", response)
}, err => {
    console.log("[ERROR]", err);
})

function delay(ms){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        }, ms)
    })
}
delay(3000).then(()=>alert('runs after 3 seconds'))