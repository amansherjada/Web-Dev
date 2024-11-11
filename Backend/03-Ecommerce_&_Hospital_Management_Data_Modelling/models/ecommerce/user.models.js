import mongoose from "mongoose";

// timestamps: true gives
// createdAt: a date representing when this document was created
// updatedAt: a date representing when this document was last updated

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },

        password: {
            type: String,
            require: true
        },

    }, { timestamps: true }
)


export const User = mongoose.model("User", userSchema)