import mongoose from "mongoose";

// Define a schema for order items
const orderItemSchema = new mongoose.Schema({
    // Reference to the product ID
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    
    // Quantity of the order item
    quantity: {
        type: Number,
        required: true
    }
})

// Define a schema for orders
const orderSchema = new mongoose.Schema(
    {
        // Total price of the order
        orderPrice: {
            type: Number,
            required: true
        },
        
        // Reference to the customer ID
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        
        // Array of order items
        orderItems: {
            type: [orderItemSchema]
        },
        
        // Delivery address
        address: {
            type: String,
            required: true
        },
        
        // Status of the order (PENDING, CANCELLLED, DELIVERED)
        status: {
            type: String,
            enum: ["PENDING", "CANCELLED", "DELIVERED"],
            default: "PENDING"
        }

    }, 
    // Enable timestamps for the order (createdAt, updatedAt)
    { timestamps: true }
)

// Create a mongoose model for orders
export const Order = mongoose.model("Order", orderSchema)