// Imports
import { createSlice } from "@reduxjs/toolkit";
import { addEntity, addEntities, removeEntity, removeEntities } from "../../helpers/entitiesHelper";

// Methods
const slice = createSlice({
    name: "item",
    initialState: {},
    reducers: {
        itemAdded: addEntity(),
        itemsAdded: addEntities(),
        itemDeleted: removeEntity(),
        itemsDeleted: removeEntities()
    }
})

// Exports
export default slice.reducer
export const {
    itemAdded, itemsAdded, 
    itemModified, itemsModified, 
    itemDeleted, itemsDeleted
} = slice.actions