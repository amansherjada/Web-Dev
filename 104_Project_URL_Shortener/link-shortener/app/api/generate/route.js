// https://nextjs.org/docs/app/api-reference/file-conventions/route

// Import the MongoDB client promise to connect to the database
import clientPromise from "@/lib/mongodb"

// Define the POST function to handle incoming POST requests
export async function POST(request) {

    // Parse the JSON body from the incoming request
    const body = await request.json() 

    // Wait for the MongoDB client to connect
    const client = await clientPromise;

    // Access the "bhailinkde" database
    const db = client.db("bhailinkde")

    // Access the "url" collection in the database, where URLs are stored
    const collection = db.collection("url")

    // Check if a document with the given short URL already exists in the collection
    const doc = await collection.findOne({ shorturl: body.shorturl })
    
    // If the short URL already exists, respond with an error message
    if (doc) {
        return Response.json({ success: false, error: true, message: 'URL already exists!' })
    }

    // If the short URL doesn’t exist, insert the new URL and short URL into the collection
    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })

    // Respond with a success message indicating the URL was created
    return Response.json({ success: true, error: false, message: 'URL Generated Successfully' })
}
