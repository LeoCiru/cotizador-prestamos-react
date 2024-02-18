import ControlMonto from "./components/ControlMonto"
import Header from "./components/Header"
import { useState } from "react"

function App() {
  const [cantidad, setCantidad] = useState(10000)

  return (
    <div className="contenedor">
      <div className="contenedor-card">
        <Header/>
        <ControlMonto
          cantidad = {cantidad}
          setCantidad = {setCantidad}
        />

      </div>
    </div>
  )
}

export default App
