import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  let [counter, setCounter] = useState(15)
  // let counter = 5

  const addValue = () =>{
    console.log("clicked", counter);
    // counter = counter + 1
    setCounter(prevCounter => + prevCounter + 1)
    setCounter(prevCounter => + prevCounter + 1)
    setCounter(prevCounter => + prevCounter + 1)
    setCounter(prevCounter => + prevCounter + 1)
  }

  const removeValue =() =>{
    console.log("clicked", counter);
    counter = counter -1;
    setCounter(counter)
  }
  return (
    <>
      <div>
        <h1>Tea and React</h1>
        <h2>Counter Num: {counter} </h2>
        <button onClick = {addValue}>Add value {counter}</button>
        <br />
        <button onClick={removeValue}>Remove value {counter}</button>
      </div>
    </>
  )
}

export default App
