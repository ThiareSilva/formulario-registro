import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import Registro from './Registro';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registro />
    </>
  )
}

export default App
