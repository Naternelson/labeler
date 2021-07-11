import FormInput from './input'
import './Form.css'
import {submitFormHelper} from '../helpers/formSubmission'

const FormCustom = props => {
    let { id, style, onSubmit, auto, children} = props
    onSubmit = submitFormHelper({auto, cb: onSubmit})

    return <form id={id} onSubmit={onSubmit} className={style}>
        {children}
    </form>
}

const FormAuto = props => {
    const inputArr = []
    let {id, style, onSubmit, auto, inputs} = props
    for(let key in inputs){
        inputArr.push(<FormInput type={"text"} key={key} label={key} name={key}/>)
    }
    return <FormCustom id={id} style={style} onSubmit={onSubmit} auto={auto}>
        {inputArr}
    </FormCustom>
}

export default FormCustom 
export {FormAuto}
