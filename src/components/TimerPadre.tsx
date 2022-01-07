import React, { useState } from 'react'
import TImer from './TImer';

const TimerPadre = () => {

  const [millisegundos, setMillisegundos] = useState(1000);
  return (
    <>
      <span>Milisegundos { millisegundos }</span>
      <button 
        className="btn btn-outline-success"
        onClick={ () => setMillisegundos(1000) }>
        1000
       </button>

      <button 
        className="btn btn-outline-success"
        onClick={ () => setMillisegundos(2000) }>
                2000
            </button>
      <TImer 
        millisegundos = {millisegundos} />
      <br/>
    </>
  )
}

export default TimerPadre
