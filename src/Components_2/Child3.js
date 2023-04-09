import React, { useState } from 'react'
import { useContext } from 'react'
import anotherContext from './Context'

function Child3() {
    const {setInfo}=useContext(anotherContext)
    const [value,setValue]=useState('')
  return (
    <div>
      <h2>Child 4 Component</h2>
      <input type='text' onChange={(e)=>{setValue(e.target.value)}}/>
      <button onClick={()=>{setInfo(value)}}>Send Data</button>
    </div>
  )
}

export default Child3
