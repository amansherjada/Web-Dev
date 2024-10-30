import { NextResponse } from "next/server"; // Importing NextResponse for creating responses

// The `POST` function handles POST requests to the "/api/add" route.
export async function POST(request) {
  // Parsing the incoming request body as JSON.
  let data = await request.json();
  
  console.log(data); // Logs the received data to the console.

  // Returning a JSON response with a success message and the received data.
  return NextResponse.json({ success: true, data });
}
