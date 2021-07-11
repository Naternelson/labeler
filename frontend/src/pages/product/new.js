import FormCustom, {FormInput, FormSelect} from '../../components/form/formConfig'
import { useDispatch, useSelector } from 'react-redux'
import { nameChanged, descriptionChanged, salesPriceChanged, purchasePriceChanged } from '../../store/forms/products/new'

const NewProductPage = props => {
    //hooks
    const dispatch = useDispatch()
    const nameValue = useSelector( store => store.forms.newProduct.data["name"])
    const descriptionValue = useSelector( store => store.forms.newProduct.data["description"])
    const salesPriceValue  = useSelector( store => store.forms.newProduct.data["sales_price"])
    const purchasePriceValue  = useSelector( store => store.forms.newProduct.data["purchase_price"])
    const uidIds = useSelector( store => store.forms.newProduct.data["uids"])
    const uids = useSelector(store => store.entities.uidParam)
    
    //events
    const onSubmit = e => {
        console.log("Submitted New Product", e)
    }
    const changeName = (e) => dispatch(nameChanged(e.target.value))
    const changeDescription = (e) => dispatch(descriptionChanged(e.target.value))
    const changeSalesPrice = (e) => dispatch(salesPriceChanged(e.target.value))
    const changePurchasePrice = (e) => dispatch(purchasePriceChanged(e.target.value))
    
    //methods
    const uidList = uidIds.map( u => <li key={u}>{uids[u]}</li>)
    const uidOptions = [<option key={"nothing"} value="">Select a Unique Identifier</option>]
    Object.keys(uids).forEach(u => {
        uidOptions.push(<option key={u} value={uids[u].name}>{uids[u].name}</option>)
    })

    //render
    return <FormCustom onSubmit={onSubmit} >
        <FormInput id="name" label={"name"} value={nameValue} onChange={changeName}/>
        <FormInput id="description" label={"description"} value={descriptionValue} onChange={changeDescription}/>
        <FormInput type={"number"} id="sales_price" label={"sales_price"} value={salesPriceValue} onChange={changeSalesPrice}/>
        <FormInput type={"number"} id="purchase_price" label={"purchase_price"} value={purchasePriceValue} onChange={changePurchasePrice}/>
        <div>
            <FormSelect id={"uids"} label={"unique-identifiers"}>{uidOptions}</FormSelect>
            <ul>
                {uidList}
            </ul>
        </div>
    </FormCustom>
}

export default NewProductPage
