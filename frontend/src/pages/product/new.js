import FormCustom, {FormInput} from '../../components/form/formConfig'
const NewProductPage = props => {
    const onSubmit = e => {
        console.log("Submitted New Product", e)
    }
    <FormCustom onSubmit={onSubmit}>
        <FormInput name={"name"}/>
        <FormInput name={"description"}/>
        <FormInput type={"number"} name={"default-sales-price"}/>
        <FormInput type={"number"} name={"default-purchase-price"}/>
    </FormCustom>
}

export default NewProductPage