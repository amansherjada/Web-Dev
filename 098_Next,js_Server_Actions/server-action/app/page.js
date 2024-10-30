// Mark this file to be used on the client side (in the browser)
"use client"

import { submitAction } from "@/actions/form"; // Importing a server-side function from form.js
import { useRef } from "react"; // Importing useRef to manage form reference

// Define the main component for the page
export default function Home() {
  // Create a reference (ref) for the form to easily access it later
  let ref = useRef();

  // Return the component's HTML structure
  return (
    <div className="container bg-black px-7 text-white w-1/2 mx-auto my-20 py-5">
      {/* Form that handles submit with server action */}
      <form
        ref={ref}
        // on form submission, call submitAction and then reset the form
        action={(e) => {
          submitAction(e); // Call server-side action to handle form submission
          ref.current.reset(); // Reset the form fields after submission
        }}
      >
        {/* Name input field */}
        <div>
          <label htmlFor="name" className="px-5">Name</label>
          <input type="text" name="name" id="name" className="text-black" />
        </div>
        
        {/* Address input field */}
        <div>
          <label htmlFor="add" className="px-5">Address</label>
          <input type="text" name="add" id="add" className="text-black" />
        </div>

        {/* Submit button */}
        <div>
          <button className="px-5 border-2">Submit</button>
        </div>
      </form>
    </div>
  );
}
