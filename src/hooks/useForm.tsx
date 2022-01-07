import { ChangeEvent, useState } from 'react'


const useForm =<T extends Object> (initialState:T) =>{
  const [formulario, setFormulario] = useState(initialState)

  const handleInputChange = ({target}:ChangeEvent<HTMLInputElement>) => {
    setFormulario({
      ...formulario,
      [target.name]:target.value
    })
  }

  return {
    formulario,
    handleInputChange
  }
}

export default useForm