// Import the useState Hook from React
import { useState } from 'react';
import './App.css';

function App() {
  // Declare a state variable 'count' with an initial value of 0.
  // 'setCount' is a function that will be used to update 'count'.
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Display the current value of 'count' */}
      <div>The count is {count}</div>
      
      {/* When the button is clicked, the 'setCount' function updates the state value by adding 1 to 'count'. */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}

export default App;
