import React, { useEffect, useState } from 'react'

function Github() {
const [data,setData] = useState([])
   useEffect(() => {
    fetch(`https://api.github.com/users/guruprasadyewandage`)
    .then(res => res.json())
    .then(data => {
        console.log(data);  
        setData(data)
    })
   },[])
     return (
    <div className=' bg-yellow-400 text-black text-3xl p-3 justify-center'>
      Github Follwers : {data.following}

      <img src= {data.avatar_url} alt="git picture" width={300}/>
    </div>
  )
}

export default Github
