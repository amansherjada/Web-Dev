import mongoose from "mongoose";

// This code defines a Mongoose schema for a User model, specifying the structure of the user data in the MongoDB database.
// The schema includes fields for username, email, and password, with validation rules for each field.
const userSchema = new mongoose.Schema(
    {
        // The username field is a required, unique string that is converted to lowercase.
        username: { type: String, required: true, unique: true, lowercase: true },
        // The email field is a required, unique string that is converted to lowercase.
        email: { type: String, required: true, unique: true, lowercase: true },
        // The password field is a required string with a custom error message.
        password: { type: String, required: [true, "Password Required"] },
    }, {timestamps: true}
)

// This line creates a Mongoose model named "User" based on the userSchema, allowing for interactions with the User collection in the MongoDB database.
export const User = mongoose.model("User", userSchema)