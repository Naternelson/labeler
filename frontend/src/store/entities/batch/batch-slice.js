// Imports
import { createSlice } from "@reduxjs/toolkit";
import { addEntity, addEntities, removeEntity, removeEntities } from "../../helpers/entitiesHelper";

// Methods
const slice = createSlice({
    name: "batch",
    initialState: {},
    reducers: {
        batchAdded: addEntity(),
        batchesAdded: addEntities(),
        batchDeleted: removeEntity(),
        batchesDeleted: removeEntities()
    }
})

// Exports
export default slice.reducer
export const {
    batchAdded, batchesAdded, 
    batchModified, batchesModified, 
    batchDeleted, batchesDeleted
} = slice.actions