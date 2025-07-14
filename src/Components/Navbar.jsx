import React from 'react'
import style from "../Components/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={style.container}>
      <h1 class={style.logo}>Navbar</h1>

      <ul>
        <li>Home</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
