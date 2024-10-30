// Mark this file to be used only on the server side (on the server)
"use server"

import fs from "fs/promises"; // Importing Node.js file system module for server-side file writing

// Define the server-side function to handle form submission
export const submitAction = async (e) => {
  // Log the form data to the console (server-side console)
  console.log(e.get("name"), e.get("add"));
  
  // Write the form data to a file named "aman.txt" on the server
  let a = await fs.writeFile(
    "aman.txt",
    `Name is ${e.get("name")} and Address is ${e.get("add")}`
  );
};