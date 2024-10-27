import { useState } from 'react'
import './App.css'

function App() {
  // State variable 'names' to hold a single name, initially set to "Aman"
  const [names, setName] = useState("Aman")

  // State variable 'form' to hold an object with email and phone properties
  const [form, setForm] = useState({ email: "", phone: "" })

  // Function to handle button clicks
  const handleClick = () => {
    alert("I am Touched") // Shows an alert when the button is clicked
  }

  // Function to handle mouse hover events
  const handleOver = () => {
    alert("HOVER") // Shows an alert when the mouse hovers over the div
  }

  // Function to handle input changes
  const handleChange = (e) => {
    // Updates the 'form' state with the current input field's name and value
    setForm({ 
      ...form, // Copy the existing 'form' state values
      [e.target.name]: e.target.value // Update the property that matches the input field's 'name' attribute
    })
    console.log(form) // Logs the updated form object (not immediately updated due to state being asynchronous)
  }

  return (
    <>
      {/* Button with an onClick event that triggers handleClick */}
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* Div with an onMouseOver event that triggers handleOver */}
      <div className="red" onMouseOver={handleOver}>
        I am a red div
      </div>

      {/* Input field to capture email with an onChange event to handle input changes */}
      <input 
        type="text" 
        name='email' // Sets the name attribute to 'email'
        value={form.email} // Binds the 'email' state to the input field's value
        onChange={handleChange} // Calls handleChange on every keystroke
      />

      {/* Input field to capture phone number with an onChange event to handle input changes */}
      <input 
        type="text" 
        name='phone' // Sets the name attribute to 'phone'
        value={form.phone} // Binds the 'phone' state to the input field's value
        onChange={handleChange} // Calls handleChange on every keystroke
      />
    </>
  )
}

export default App
