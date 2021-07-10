// Imports
import { createSlice } from "@reduxjs/toolkit";
import { addEntity, addEntities, removeEntity, removeEntities } from "../../helpers/entitiesHelper";

// Methods
const slice = createSlice({
    name: "composition",
    initialState: {},
    reducers: {
        compositionAdded: addEntity(),
        compositionsAdded: addEntities(),
        compositionDeleted: removeEntity(),
        compositionsDeleted: removeEntities()
    }
})

// Exports
export default slice.reducer
export const {
    compositionAdded, compositionsAdded, 
    compositionModified, compositionsModified, 
    compositionDeleted, compositionsDeleted
} = slice.actions