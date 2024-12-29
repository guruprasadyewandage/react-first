import { useCallback, useState, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)str+= "1234567890"
    if(charAllowed)str+="!@#$%^&*(){}"
   
    for (let index = 0; index <= length; index++) {
      const char = Math.floor(Math.random() * str.length+1)
      pass+=str.charAt(char)
     
    }
    setPassword(pass)
  }, [numberAllowed, charAllowed, length,setPassword]) 

  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])

  const passwordCopyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);    //optimization  
    window.navigator.clipboard.writeText(password)
  }, [password])
  
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-500'>
      <h1 className='text-white text-center my-3 '>password generator</h1>
      <div className="flex shodow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        ref={passwordRef}
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        />

        <button onClick={passwordCopyToClipboard}
        className=' bg-blue-500 text-white outline-none px-3 py-1 shrink-0'>copy
        </button>
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label> length : {length}</label>

          <div className='flex items-center gap-x-1'>

            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev)=> !prev);
            }}
            />
            <label htmlFor="numberInput">numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input  
            type="checkbox" 
            defaultChecked={charAllowed}
            id="characterInput" 
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="characterInput">charecters</label>
          </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
