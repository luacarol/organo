import './DropdownList.css'

const DropdownList = (props) => {
    return (
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={event => props.aoAlterado(event.target.value)}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList