import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addvalue = () =>{
    if(counter<25){
      setCounter(counter + 1)
    }
  }

  const removevalue = () => {
    if(counter > 0)
    setCounter(counter-1)
  }

  return (
    <>
     <h1>my first project</h1>
     <button
     onClick={addvalue}
     >add value: {counter}</button>
     <br />
     <button
     onClick={removevalue}
     >remove value: {counter}</button>

     <p>footer: {counter}</p>
    </>
  )
}

export default App
