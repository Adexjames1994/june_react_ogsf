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

function App() {
  return (
    <>
     <div>
      <Navbar/>
       <h1>Good morning</h1>
     </div>
     <div>
       <h1>Good Afternoon</h1>
     </div>
     <Banner/>
    </>
  )
}

export default App