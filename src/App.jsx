//React functional component - a function that returns JSX and exports it
//JSX - javascript + XML

// function azeem(){

// }


// const App = () =>{
//   return(
//     <h1>Hello Student</h1>
//   )
// }

// export default App
import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Card from './Components/Card'

function App() {
  return (
    <>
     <div>
      <Navbar/>
       <h1 className='text-danger border'>Good morning</h1>
     </div>
     <div className='mx-auto d-flex'>
       <h1 className=' text-primary border '>Good Afternoon</h1>
     </div>
     <Banner/>
     <Card/>
    </>
  )
}

export default App