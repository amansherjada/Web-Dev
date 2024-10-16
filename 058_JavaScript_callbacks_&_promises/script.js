// These two statements will execute first
console.log("Aman Khan");
console.log("Manaf Khan");

// Due to JavaScript's asynchronous nature, this will be scheduled to execute after 3 seconds (3000 milliseconds)
setTimeout(() => {
   console.log("I am inside the setTimeout()");
}, 3000);

// This statement will execute immediately after the first two logs, before the setTimeout callback
console.log("The END");


const callback = (arg) => {
    console.log(arg)
}

function loadScript(src, callback){
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload =callback("Aman");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)