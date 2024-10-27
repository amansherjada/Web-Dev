import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Hello",
      desc: "First Todo"
    },
    {
      title: "Hey",
      desc: "Second Todo"
    },
    {
      title: "Hi",
      desc: "Third Todo"
    }
  ])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* Conditional Rendering */}
      {/* If the showbtn variable is true, the button with the text "Button is True" will be displayed.
      If showbtn is false, the button with the text "Button is False" will be displayed. */}
      {showbtn ? <button>Button is True</button> : <button>Button is False</button>}
      
      {/*{showbtn && <button>showbtn is True</button>}*/}

      {/* Rendering Lists */}
      {todos.map(todo => {
        // key is unique
        return <div key={todo.title}>
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      })}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
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