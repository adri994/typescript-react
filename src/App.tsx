
import ContadorRed from './components/ContadorRed'
import Counter from './components/Counter'
import Formulario from './components/Formulario'
import TimerPadre from './components/TimerPadre'
import Usuario from './components/Usuario'

const App = () => {

  
  return (
    <>
      <h1>Hola mundo - TS</h1>
      <hr />
      <Counter />
      <Usuario />
      <hr />
      <TimerPadre />
      <hr />
      <h1>Use Reducer</h1>
      <ContadorRed />
      <hr />
      <h1>Custom hook</h1>
      <Formulario />
    </>
  )
}

export default App

