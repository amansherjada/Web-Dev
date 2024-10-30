// "use client" enables client-side rendering for this file.
"use client"

// Defining a default export function called "Home" which represents the page component.
export default function Home() {
  
  // This function is triggered when the button is clicked.
  const handleClick = async () => {
    // Creating an object 'data' with two properties: 'name' and 'place'.
    let data = {
      name: "aman",
      place: "mumbai"
    };

    // Sending a POST request to the "/api/add" API endpoint with the 'data' object.
    let a = await fetch("/api/add", {
      method: "POST", // Specifies the HTTP method as POST.
      headers: {
        "Content-Type": "application/json", // Tells the server that we're sending JSON data.
      },
      body: JSON.stringify(data), // Converts the 'data' object to a JSON string.
    });

    // Waiting for the server's response and parsing it as JSON.
    let res = await a.json();
    console.log(res); // Logs the response to the console.
  };

  // The return statement defines the HTML structure of the component.
  return (
    <div>
      <h1 className="text-xl font-bold">Next.js API routes</h1>
      {/* A button that triggers the 'handleClick' function when clicked */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
