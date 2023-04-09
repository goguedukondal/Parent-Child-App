import React, { useState } from 'react'
import B from './B'
import myContext from './Context'

function A() {
    const [state,setState]=useState('')
    const [change,setChange]=useState('')
    const handleClick=()=>{
        setChange(state)
    }
  return (
    <div className='context'>
      <h1 className='h1'> Parent to Child</h1>
      <div>
        <h2>A Component</h2>
        <input type='text' onChange={(e)=>{setState(e.target.value)}}/>
        <button onClick={handleClick}>Send Data</button>
      </div>
      <hr/>
      <myContext.Provider value={{change}}>
        <B/>
      </myContext.Provider>
    </div>
  )
}

export default A