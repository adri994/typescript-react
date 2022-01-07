import useForm from "../hooks/useForm"

interface Form {
  email: '',
  nombre: ''
}

const Formulario = () => {

  const {handleInputChange} = useForm<Form>({
    email:'',
    nombre:''
  })

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          onChange={handleInputChange}
          name="email" />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          onChange={handleInputChange}
          name="nombre" />
      </div>
    </form>
  )
}

export default Formulario
