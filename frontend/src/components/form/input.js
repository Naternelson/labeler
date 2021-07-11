import { checkInputId } from "../helpers/formChecks"
import { convert } from "../helpers/stringHelper"
import './Form.css'

const FormInput = props => {
    let { 
        type, label, 
        id, name, style, error, 
        value, onChange, disabled,
        pattern, min, max, required,
        minLength, maxLength, list } = props
    
    id = checkInputId(props)
    label = convert(label || name || id).fromDash().toTitle()
    if(!id)return null 

    return <div className={`form-input ${style}`}>
        <label htmlFor={id}>{label}</label>
        <input 
            type={type}     
            onChange={onChange} 
            value={value}
            name={name}
            pattern={pattern}
            min={type==="number" ? min : null }
            max={type==="number" ? max : null }
            minLength={minLength}
            maxLength={maxLength}
            required={!!required}
            disabled={!!disabled}
            list={list}
        />
        {error ? <p className={"input-error-message"}>{error}</p> : null}
    </div>
}

export default FormInput 