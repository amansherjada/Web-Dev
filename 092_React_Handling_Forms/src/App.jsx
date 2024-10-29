// Import necessary hooks and styles
import { useState } from 'react' // React's useState hook (not used here but could be utilized if needed)
import './App.css' // Importing CSS for styling the application
import { useForm } from "react-hook-form" // Importing useForm hook from React Hook Form library

function App() {
  // Destructuring methods and properties from useForm hook
  const {
    register, // Function to register input fields and apply validation rules
    handleSubmit, // Function to handle form submission
    setError, // Function to set custom errors
    formState: { errors, isSubmitting }, // Extracting errors and isSubmitting from formState
  } = useForm();

  // Function to simulate a network delay using a Promise
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      // Resolves after d seconds, simulating a delay
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  // Function to handle form submission
  const onSubmit = async (data) => {
    // Commented out delay as it was simulating a network delay
    // await delay(2); 

    // Sending form data to an API endpoint using fetch
    let r = await fetch("http://localhost:3000/", {
      method: "POST", // Setting method as POST for sending data
      headers: {
        "Content-Type": "application/json", // Indicating the content type
      },
      body: JSON.stringify(data), // Converting the form data to JSON string
    });

    // Getting response as text
    let res = await r.text(); 
    console.log(data, res); // Logging form data and server response

    // Example conditional error settings based on username
    // Uncomment these lines if you want to apply custom validations

    // if (data.username !== "shubham") {
    //   setError("myform", {
    //     message: "Your form is not in good order because credentials are invalid",
    //   });
    // }
    // if (data.username === "rohan") {
    //   setError("blocked", { message: "Sorry this user is blocked" });
    // }
  };

  return (
    <>
      {/* Display a loading message when the form is being submitted */}
      {isSubmitting && <div>Loading...</div>}
      
      {/* Main container for the form */}
      <div className="container">
        {/* Form element with a submit handler */}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* Username input field with validation rules */}
          <input
            placeholder="username"
            {...register("username", {
              required: { value: true, message: "This field is required" }, // Required validation
              minLength: { value: 3, message: "Min length is 3" }, // Min length validation
              maxLength: { value: 8, message: "Max length is 8" }, // Max length validation
            })}
            type="text"
          />
          {/* Display username errors if they exist */}
          {errors.username && <div className="red">{errors.username.message}</div>}
          <br />
          
          {/* Password input field with validation rules */}
          <input
            placeholder="password"
            {...register("password", {
              minLength: { value: 7, message: "Min length of password is 7" }, // Min length validation
            })}
            type="password"
          />
          {/* Display password errors if they exist */}
          {errors.password && <div className="red">{errors.password.message}</div>}
          <br />

          {/* Submit button, disabled when the form is being submitted */}
          <input disabled={isSubmitting} type="submit" value="Submit" />

          {/* Display custom form errors */}
          {errors.myform && <div className="red">{errors.myform.message}</div>}
          {errors.blocked && <div className="red">{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  );
}

export default App;
