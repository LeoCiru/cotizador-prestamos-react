import { useState,useEffect } from "react"
import { calcularPagoTotal, formatearDinero, calcularMensualidad } from "../helpers"

/* eslint-disable react/prop-types */

function ResumenPagos({meses, cantidad}) {

    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        setTotal(calcularPagoTotal(cantidad, meses));
    }, [meses, cantidad])

    return(
        <div className="resumen-box">
            <h2>Resumen <span>de pagos</span></h2>

            <p>{meses} meses</p>
            <p>{formatearDinero(total)} total a pagar</p>
            <p>{formatearDinero(calcularMensualidad(total, meses))} mensuales</p>

        </div>
    )
}

export default ResumenPagos