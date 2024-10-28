import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'

const Component1 = () => {
    const counterValue = useContext(counterContext) 
  return (
    <div>counterValue {counterValue}</div>
  )
}

export default Component1