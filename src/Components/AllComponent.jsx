import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import ClickEvent from './ClickEvent'
import Count from './Count'
import Banner from './Banner'
import Card from './Card'

const AllComponent = () => {
  const editButton = ()=>{
    alert("i am edit")
  }
  return (
    <div>
      <Navbar/>
      <Button title="edit" color="btn btn-danger me-3" edit={editButton}/>
      <Button title="delete" color="btn btn-danger me-3" edit={editButton}/>
      <Button title="update" color="btn btn-primary me-3" edit={editButton}/>
      <ClickEvent/>

      <div className='mx-auto d-flex'>
       <h1 className=' text-primary border '>Good Afternoon</h1>
       <Count/>
     </div>
     <Banner/>
     <Card/>
    </div>
  )
}

export default AllComponent
