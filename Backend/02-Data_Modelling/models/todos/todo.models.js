// Importing the mongoose library to interact with the MongoDB database
import mongoose from "mongoose";

// Defining a schema for the Todo model, which represents a single todo item
// The schema includes fields for the todo's content, completion status, creator, and sub-todos
const todoSchema = new mongoose.Schema({
    // The content of the todo item, which is a required string
    content: {
        type: String,
        required: true
    },

    // The completion status of the todo item, which defaults to false
    complete: {
        type: Boolean,
        default: false
    },

    // The user who created the todo item, referenced by their ObjectId
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    // An array of sub-todos associated with this todo item, referenced by their ObjectId
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]

}, { 
    // Including timestamps (createdAt and updatedAt) for each todo item
    timestamps: true 
})

// Creating a Mongoose model for the Todo schema, which can be used to interact with the database
export const Todo = mongoose.model("Todo", todoSchema)