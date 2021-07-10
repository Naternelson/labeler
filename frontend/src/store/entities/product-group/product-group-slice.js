// Imports
import { createSlice } from "@reduxjs/toolkit";
import { addEntity, addEntities, removeEntity, removeEntities } from "../../configuration/storeHelper";

// Methods
const slice = createSlice({
    name: "productGroup",
    initialState: {},
    reducers: {
        productGroupAdded: addEntity(),
        productGroupsAdded: addEntities(),
        productGroupDeleted: removeEntity(),
        productGroupsDeleted: removeEntities()
    }
})

// Exports
export default slice.reducer
export const {
    productGroupAdded, productGroupsAdded, 
    productGroupModified, productGroupsModified, 
    productGroupDeleted, productGroupsDeleted
} = slice.actions