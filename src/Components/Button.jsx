import React from 'react'

const Button = ({title,color, edit}) => {
  return (
    <div>
      {/* <button color={props.color}>{props.title}</button> */}
      <button onClick={edit} className={color}>{title}</button>
    </div>
  )
}

export default Button
