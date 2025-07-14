import React, { useState } from 'react'


// let myAge = 12
// let myName = "john"


const ClickEvent = () => {
const [myName, setmyName] = useState("adeola")
const [myAge, setmyAge] = useState(10)
// const [nameOfVariable, nameOfFunctionThatWillChangeVariable] = useState(second)

const increaseAge = ()=>{
  // myAge += 1
  // myAge++
  // myAge = myAge + 1
  // let newAge = myAge
  // setmyName("john")
  // setmyAge(newAge)
  setmyAge(myAge+1)

  console.log(myAge)
}


  return (
    <div className='my-3'>
      <h1 className="text-center p-4">i am {myAge} years</h1>
      <h1>{myName}</h1>
      <button onClick={()=>setmyName('james')} className='btn btn-success'>change name</button>

      <div className='text-center'>
        {/* <button onClick={()=>increaseAge()} className='btn btn success'>increase</button> */}
        <button onClick={()=>setmyAge(myAge+1)} className='btn btn-success'>increase</button>
      </div>

      <div className='text-center'>
        <h1>Dice 1: {Math.floor(Math.random()*10)}</h1>
        <h1>Dice 2: {Math.floor(Math.random()*10)}</h1>
        
        <button  className='btn btn-success'>increase</button>
      </div>
    </div>
  )
}

export default ClickEvent

//React hooks - useState, useEffect, UseREF (functions are directly relate to react)

