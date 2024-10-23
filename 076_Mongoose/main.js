// Importing necessary modules
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js"; // Importing the Todo model

const app = express(); 
const port = 3000;

// Establish a connection to MongoDB using Mongoose
let conn = await mongoose.connect("mongodb://localhost:27017/todo");

app.get('/', (req, res) => {
    // Create a new instance of the Todo model with specific field values
    const todo = new Todo({ title: "Hey first todo", desc: "Description", isDone: false });
    // Save the new Todo instance to the database
    todo.save();
    // Send a response back to the client
    res.send('Hello World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
