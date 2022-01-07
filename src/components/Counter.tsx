import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const incrementar = (numero:number = 1) =>{
    setCounter(counter +numero )
  }

  return (
    <div className="mt-5">
      <h3>Counter: useState</h3>
      <span>{ counter }</span>
      <br />
      <button
        onClick={ ()=> incrementar() }
        className="btn btn-outline-primary mt-2">
        +1
      </button> 
      <button
        onClick={ ()=>incrementar(2) }
        className="btn btn-outline-primary mt-2">
        +2
      </button> 
    </div>
  )
}

export default Counter
