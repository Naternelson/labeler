// Imports
import { createSlice } from "@reduxjs/toolkit";
import { dataChanger, orderChanger } from "../../helpers/storeHelper";

// Declarations
const name = "name"
const description = "description"
const salesPrice = "sales_price"
const purchasePrice = "purchase_price"
const uids = "uids"

const initialState = {
    data: {
        [name]: "",
        [description]: "",
        [salesPrice]: null,
        [purchasePrice]: null,
        [uids]: []
    },
    order: [name, description, uids, purchasePrice, salesPrice]
}

// Methods
const slice = createSlice({
    name: "newProduct",
    initialState,
    reducers: {
        nameChanged: dataChanger(name),
        descriptionChanged: dataChanger(description),
        salesPriceChanged: dataChanger(salesPrice),
        purchasePriceChanged: dataChanger(salesPrice),
        uidAdded: (store, action) => {
            store.data[uids].push(action.payload) 
        },
        uidRemoved: (store, action) => {
            const index = store.data[uids].indexOf(action.payload)
            store.data[uids].splice(index, 1)
        },
        uidOrderChanged: (store, action) => {
            const {searchElement, beforeElement } = action.payload
            const indexPrimary = store.data[uids].indexOf(searchElement)
            if(indexPrimary === -1) return 
            const el = store.data[uids].splice(indexPrimary, 1)[0]
            const indexSecondary = store.data[uids].indexOf(beforeElement)
            indexSecondary === -1 ? store.data[uids].push(el) : store.data[uids].splice(indexSecondary, 0, el)
        },
        orderChanged: orderChanger(),
        formReset: () => initialState
    }
})

// Exports
export default slice.reducer
export const {nameChanged,
    descriptionChanged,
    salesPriceChanged,
    purchasePriceChanged,
    uidAdded,
    uidRemoved,
    uidOrderChanged,
    orderChanged,
    formReset
} = slice.actions