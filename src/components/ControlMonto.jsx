function ControlMonto({cantidad, setCantidad}) {

    const MIN = 0, MAX = 20000, STEP = 100;

    function handleChangeRange(e) {
        setCantidad(e.target.value);
    }


    function handleLeftButton() {
        setCantidad(cantidad - STEP);

        if (cantidad <= MIN) {
            setCantidad(0)
            alert("La cantidad mínima es cero.")
        }
    }

    function handleRightButton() {
        setCantidad(cantidad + STEP);

        if (cantidad >= MAX) {
            setCantidad(20000)
            alert("La cantidad máxima es 20,000.")
        }

    }


    return (
        <>
        <div className="btns">
            <input
                type="button"
                value="-"
                onClick={handleLeftButton}
            />
            <input
                type="button"
                value="+"
                onClick={handleRightButton}
            />
        </div>

        <div className="rango">
            <input 
               type="range" 
               id="rango"
               min={MIN}
               max={MAX}
               step={STEP}
               value={cantidad}
               onChange={handleChangeRange}
            />
        </div>

        <p className="monto">{cantidad}</p>
        </>
    )
}

export default ControlMonto