import React, { useState } from 'react'
import anotherContext from './Context'
import Child1 from './Child1'

function Parent() {
    const [info,setInfo]=useState('')
  return (
    <div className='container'>
        <h1 className='heading'>Child to Parent</h1>
      <h2>Parent Component</h2>
      <p>Data From D: {info}</p><hr/>
    <anotherContext.Provider value={{setInfo}}>
        <Child1/>
    </anotherContext.Provider>
    </div>
  )
}

export default Parent