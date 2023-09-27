// Callbacks

// function 1 decleration
function makeFryAnda(callback){
    setTimeout(()=>{
        callback("Egg Fried")
    },2000);
}

// function 2 decleration
function toastBread(cb){
    setTimeout(()=>{
        cb("Toast Done")
    }, 3000);
}

// functions invocations
toastBread((arg) => {
    console.log(arg);
    makeFryAnda((arg1) => {
        console.log(arg1)
    })
});