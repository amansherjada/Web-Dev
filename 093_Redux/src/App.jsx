import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'

// https://redux-toolkit.js.org/tutorials/quick-start

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar/>
      <div className='red'>
        <button onClick={() => dispatch(decrement())}>-</button>
        Current count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  )
}

export default App
