import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className=' bg-yellow-400 text-3xl text-black my-3 py-4'>
     User:{userid}
    </div>
  )
}

export default User
