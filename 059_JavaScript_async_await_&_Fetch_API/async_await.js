// This is an asynchronous function that returns a promise
// async function getData() {
//     return new Promise((resolve, reject) => {
//         // Simulate a delay of 3.5 seconds, then resolve the promise with the value 455
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     });
// }

// This async function fetches data from an API and returns it
async function getData() {
    // Await fetches the data from the API (asynchronous HTTP request)
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // Await waits for the response to be converted into JSON format
    let data = await x.json();
    // Returns the fetched JSON data instead of just logging it
    return data;
}

// The main function is declared async to allow the use of await
async function main() {
    // This will print first (synchronous)
    console.log("Load Modules");
    // This will print next (synchronous)
    console.log("Do Something");
    // Await pauses the execution until getData() is completed and gets the returned data
    let data = await getData();
    // This will print the data fetched from the API
    console.log(data);
    // This will print after the data (synchronous)
    console.log("Process Data");
    // This will print after "Process Data" (synchronous)
    console.log("Task 2");
}

// Calling the main function to run the code
main();

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// GET, POST, PUT, DELETE Examples = https://jsonplaceholder.typicode.com/guide/