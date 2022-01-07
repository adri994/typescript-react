import React, { useEffect, useRef, useState } from 'react'

type Props = {
  millisegundos:number
}

const TImer = ({millisegundos}:Props) => {

  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timer>()

  useEffect(() => {
    ref.current && clearTimeout(ref.current)
    ref.current = setInterval(()=>setSegundos(s=>s+1),millisegundos)

  }, [millisegundos])
  return (
    <>
      <h4>Timer: <small>{segundos}</small></h4>
    </>
  )
}

export default TImer
