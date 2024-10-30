# **Server Action**

In **Next.js**, a **Server Action** is a new feature introduced to allow developers to write functions that run directly on the server, while still being easy to call from the client (your frontend code). Server Actions help you securely handle tasks like form submissions, API calls, or data manipulation without exposing sensitive logic or database connections to the user's browser.

### Why Use Server Actions?
- **Secure Data Handling**: Logic runs only on the server, keeping things like database credentials and API keys hidden.
- **Simplicity**: You can write functions that look similar to client-side code, but they execute securely on the server.
- **No Need for API Endpoints**: Instead of setting up traditional API routes, you can handle server-side tasks directly in your React components.

### Key Benefits:
- **Simplifies data fetching** and form handling.
- **Keeps server-side code hidden**, making your app more secure.
- **Improves performance** by allowing server-side execution of tasks.

### How to Use Server Actions in Next.js?

#### 1. **Marking a Function as a Server Action**
In Next.js, you simply write a function in your component or in a separate file and mark it to run on the server using the `"use server"` directive. Let’s walk through an example.

#### Example: Submitting a Form with a Server Action

1. **Set up a basic Next.js component with a form**:
   ```jsx
   // app/page.js

   "use client"; // For client-side interactivity
   import { useState } from "react";

   // Import the server action
   import { addUser } from "./actions"; // This is the server action

   export default function Home() {
     const [userName, setUserName] = useState("");
     const [message, setMessage] = useState("");

     const handleSubmit = async (e) => {
       e.preventDefault();
       try {
         // Call the server action to handle the form submission
         const response = await addUser(userName);
         setMessage(response.message);
       } catch (error) {
         console.error(error);
         setMessage("Error occurred while adding user.");
       }
     };

     return (
       <div>
         <h1>Server Actions in Next.js</h1>
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             placeholder="Enter name"
             value={userName}
             onChange={(e) => setUserName(e.target.value)}
           />
           <button type="submit">Add User</button>
         </form>
         {message && <p>{message}</p>}
       </div>
     );
   }
   ```

   - **Explanation**:
     - The `Home` component displays a form with an input field for entering a name.
     - When the form is submitted, it calls the `addUser` function, which is a **server action**.

2. **Define the Server Action**:
   Create a file named `actions.js` (or any name) in the same folder as `page.js`.

   ```javascript
   // app/actions.js

   "use server"; // Mark this file to be executed on the server

   export async function addUser(name) {
     // Simulate server-side processing
     console.log(`Adding user: ${name}`); // This runs only on the server

     // You can connect to a database or perform server-side tasks here

     // Return a message to the client
     return { message: `User ${name} added successfully!` };
   }
   ```

   - **Explanation**:
     - The `"use server"` directive at the top tells Next.js that this function should only run on the server.
     - This server action (`addUser`) receives a name, simulates adding a user (you can replace this with real logic like connecting to a database), and returns a success message.
     - The `console.log` statement only runs on the server, so the client can’t see or access it.

### How Do Server Actions Work?
- **Server actions are functions that run on the server** but are easy to call from the client (browser) code.
- Next.js **automatically handles** the communication between the client and server. When you call a server action from your client-side component, it’s like making a request to the server, but it’s all hidden behind a simple function call.
- They work without you needing to set up additional API routes manually.

### When Should You Use Server Actions?
- When you need to **securely handle sensitive tasks** like:
  - Storing or fetching data from a database.
  - Performing calculations or processes that shouldn’t be exposed to the client.
  - Managing authentication and user-related logic.
- When you want to **simplify your code** and avoid manually creating API routes for every small task.

### Example: Why Not Just Use API Routes?
- In traditional setups, you would create an API route (like `/api/addUser`) and then make a `fetch` call from your frontend to that route. With server actions, you skip creating an API route and directly call a function that runs on the server.
- This helps keep your code cleaner and reduces boilerplate.

### Key Points to Remember:
- Server actions are **only accessible from your Next.js project**. External users cannot directly call them like traditional APIs.
- They help you **keep server-side code secure** and hidden from the client.
- You still write familiar JavaScript/React code, but the server-side logic is automatically managed by Next.js.

### Summary:
**Server actions in Next.js** let you write secure, server-side logic and call it easily from your client-side code without exposing sensitive information. They provide a simple and more secure way to handle tasks like form submissions, data fetching, or database interactions. By using `"use server"`, Next.js keeps your server-side logic secure while simplifying your code.