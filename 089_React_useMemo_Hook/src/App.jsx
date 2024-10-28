import { useState, useMemo } from 'react' 
import reactLogo from './assets/react.svg' 
import viteLogo from '/vite.svg' 
import './App.css'

// Creating an initial array with 20,000 items
const nums = new Array(20_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 19_000 // Only the item at index 19,000 is marked as "magical"
  }
})

function App() {
  // State for counting button clicks
  const [count, setCount] = useState(0)

  // State for storing the array of numbers
  const [numbers, setNumbers] = useState(nums)

  // Finding the magical number using useMemo to prevent unnecessary calculations on every render
  // The callback runs only when the `numbers` array changes
  const magical = useMemo(() => {
    // This is the "expensive" computation: searching for the magical number
    return numbers.find(item => item.isMagical === true)
  }, [numbers]) // Dependency array - recalculates only when the numbers array changes

  return (
    <>
      <div>Magical Number is {magical.index}</div> {/* Displaying the index of the magical number */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* Button to increment the count */}
        <button onClick={() => {
          setCount((count) => count + 1) // Increment the count state

          // When count reaches 10, update the numbers array with a new set of 10,000 elements
          if (count == 10) {
            setNumbers(new Array(10_000).fill(0).map((_, i) => {
              return {
                index: i,
                isMagical: i === 9_000 // Setting the new magical number at index 9,000
              }
            }))
          }
        }}>
          count is {count} {/* Displaying the current count */}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
