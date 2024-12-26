import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
//old method here we create a arrow function and send refrence from onclick method
  const purplen= () => {
    setColor("purple")
  }

  return (
    
  <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-1 px-3 ">
          <div className="flex gap-5 flex-wrap justify-center bg-white px-3 py-2 rounded-2xl ">
            <button
//here we directly create arrow function in onclick beacause it send directly input to usestate.
            onClick={() => setColor("red")}
            className="bg-red-500 rounded-2xl px-4 py-1 "
            >red</button>

            <button
            onClick={() => setColor("green")}
            className="bg-green-500 rounded-2xl px-4 py-1 "
            >green</button>

            <button
            onClick={() => setColor("orange")}
            className="bg-orange-500 rounded-2xl px-4 py-1 "
            >orange</button>

            <button
            onClick={() => setColor("blue")}
            className="bg-blue-500 rounded-2xl px-4 py-1 "
            >blue</button>

            <button
            onClick={purplen}
            className="bg-purple-500 rounded-2xl px-4 py-1 "
            >purple</button>
          </div>
        </div>
  </div>
  
  )
}

export default App
