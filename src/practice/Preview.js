import React from 'react'
import './Style.css'
import { useState } from 'react'
import Functional from './Functional'
import ClassComponent from './ClassComponent'
const Preview = () => {
    const [name, SetName]= useState(false)
    const [name2,SetName2]= useState(false)
    
  return (
    <div>
        <h1 className='h1'>Styling using Functional and Class Component</h1>
        <button className="bt2" onClick={()=>{name?SetName(false):SetName(true)}}>To see styling in functional component </button>
        <button className="bt1" onClick={()=>{name2?SetName2(false):SetName2(true)}}>To see styling in class component</button>

        {name&&<Functional />}
        {name2&&<ClassComponent />}
    </div>
  )
}

export default Preview