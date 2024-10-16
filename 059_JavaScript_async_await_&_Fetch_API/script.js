function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3500); // Simulate a delay of 3.5 seconds
    });
}

// First this will print immediately (synchronous)
console.log("Loading modules");
// Then this will print (synchronous)
console.log("something else");
// Then this will print (synchronous)
console.log("Load Data");

// Asynchronous task starts here, but the data is not yet available
let data = getData();

// (This is one approach to perform an async task)
// Once the data is resolved after 3.5 seconds, the following code will run
data.then((v) => {
  console.log(v); // This will print the resolved value of the promise (455)
  console.log("process data"); // This runs after data is resolved
  console.log("task 2"); // This runs after "process data"
});