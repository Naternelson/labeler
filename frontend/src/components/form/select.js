import { checkInputId } from "../helpers/formChecks"

const FormSelect = props => {
    let { 
        type, label, 
        id, name, style, error, 
        value, onChange, disabled,
        pattern, min, max, required,
        minLength, maxLength, children } = props
    
    id = checkInputId(props)
    if(!id)return null 

    return <div className={`form-input ${style}`}>
        <label htmlFor={id}>{label}</label>
        <select 
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
        >

            {children}

        </select>

        {error ? <p className={"input-error-message"}>{error}</p> : null}
    </div>
}

export default FormSelect 