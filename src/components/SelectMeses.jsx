/* eslint-disable react/prop-types */
function SelectMeses({meses, setMeses}) {
    return(
        <select
            className="opciones-meses"
            value={meses}
            onChange={e => setMeses(parseInt(e.target.value))}
        >
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
        </select>
    )
}

export default SelectMeses