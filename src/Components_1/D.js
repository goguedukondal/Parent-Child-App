import React from 'react'
import { useContext } from 'react'
import myContext from './Context'

function D() {
    const {change}=useContext(myContext)
  return (
    <div>
      <h2>D Component</h2>
      <p>Data From A: {change}</p>
    </div>
  )
}

export default D