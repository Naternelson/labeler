// Imports
import { createSlice } from "@reduxjs/toolkit";
import { addEntity, addEntities, removeEntity, removeEntities } from "../../helpers/entitiesHelper";

// Methods
const slice = createSlice({
    name: "product",
    initialState: {},
    reducers: {
        productAdded: addEntity(),
        productsAdded: addEntities(),
        productDeleted: removeEntity(),
        productsDeleted: removeEntities()
    }
})

// Exports
export default slice.reducer
export const {
    productAdded, productsAdded, 
    productModified, productsModified, 
    productDeleted, productsDeleted
} = slice.actions