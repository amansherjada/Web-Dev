// Define a Mongoose schema for a subtodo item, which includes properties for content, completion status, and the user who created it.
// The schema also includes timestamps for when the subtodo item was created and last updated.
import mongoose from "mongoose";

const subtodoSchema = new mongoose.Schema({
    // The content of the subtodo item, which is a required string.
    content: {
        type: String,
        required: true
    },
    
    // A boolean indicating whether the subtodo item is complete, defaulting to false.
    complete: {
        type: Boolean,
        default: false
    },
    
    // The user who created the subtodo item, referenced by their ObjectId in the User collection.
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true })

// Create a Mongoose model for the SubTodo schema, allowing for CRUD operations on subtodo items.
export const SubTodo = mongoose.model("SubTodo", subtodoSchema)