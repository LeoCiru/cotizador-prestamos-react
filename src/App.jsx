import ControlMonto from "./components/ControlMonto"
import Header from "./components/Header"
import SelectMeses from "./components/SelectMeses"
import ResumenPagos from "./components/ResumenPagos"
import { useState } from "react"

function App() {
  const [cantidad, setCantidad] = useState(10000)
  const [meses, setMeses] = useState(6)

  return (
    <div className="contenedor">
      <div className="contenedor-card">
        <Header/>
        <ControlMonto
          cantidad = {cantidad}
          setCantidad = {setCantidad}
        />

        <SelectMeses
          meses = {meses}
          setMeses = {setMeses}
        />

        <ResumenPagos
          meses = {meses}
          cantidad = {cantidad}
        />

      </div>
    </div>
  )
}

export default App
