// Import the MongoClient class from the MongoDB library to interact with MongoDB
import { MongoClient } from 'mongodb'

// Store the MongoDB connection URI from environment variables
const uri = process.env.MONGODB_URI

// Options to configure the MongoDB client, here specifying to use the newer URL parser
const options = { 
  useNewUrlParser: true,
}

// Declare variables to hold the MongoDB client and the connection promise
let client
let clientPromise

// Check if the MongoDB URI is not defined, and throw an error if it’s missing
if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

// In development, reuse the client connection across hot reloads to avoid creating multiple clients
if (process.env.NODE_ENV === 'development') { 
  // If there isn't an existing global MongoDB client promise, create a new one
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect() // Start connection and store it globally
  }
  // Set clientPromise to the existing global promise (or the newly created one)
  clientPromise = global._mongoClientPromise
} else {
  // In production, create a new MongoDB client and connection each time
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export the clientPromise so other parts of the app can use the MongoDB connection
export default clientPromise