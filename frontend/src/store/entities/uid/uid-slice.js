// Imports
import { createSlice } from "@reduxjs/toolkit";
import { addEntity, addEntities, removeEntity, removeEntities } from "../../helpers/entitiesHelper";

// Methods
const slice = createSlice({
    name: "uid",
    initialState: {},
    reducers: {
        uidAdded: addEntity(),
        uidsAdded: addEntities(),
        uidDeleted: removeEntity(),
        uidsDeleted: removeEntities()
    }
})

// Exports
export default slice.reducer
export const {
    uidAdded, uidsAdded, 
    uidModified, uidsModified, 
    uidDeleted, uidsDeleted
} = slice.actions