import React, { useState } from 'react'

interface User {
  uid:string,
  name:string
}

const Usuario = () => {

  const [user, setUser] = useState<User>()

  const login = () =>{
    setUser({
      uid: '123456',
      name: 'Adrian'
    })
  } 
  return (
    <div className="mt-2">
      <h3>Usuario:</h3>

      <button
        onClick={login}
        className="btn btn-outline-primary">
      Login
      </button>
      {
        (!user) 
            ? <pre> No hay usuario </pre>
            : <pre> { JSON.stringify( user ) } </pre>
            }
    </div>
  )
}

export default Usuario
