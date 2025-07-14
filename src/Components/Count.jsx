import React from 'react'
import { useState } from 'react'




const Count = () => {

  const [myCount, setmyCount] = useState(0)
  return (
    <div>
      <p>{myCount}</p>
      <button onClick={()=>setmyCount(myCount+1)} className='btn btn-success'>increase</button>
      <button onClick={()=>setmyCount(myCount-1)} className='btn btn-success'>decrease</button>
    </div>
  )
}

export default Count
