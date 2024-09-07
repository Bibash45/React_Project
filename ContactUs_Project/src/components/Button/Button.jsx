import React, { useState } from 'react'
import s from "./Button.module.css"
const Button = ({text,icon, className,onClick }) => {

  return (
   
      <button onClick={onClick} className={s[className]} >{icon}
      {text}</button>

  )
}

export default Button
