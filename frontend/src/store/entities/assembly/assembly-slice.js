// Imports
import { createSlice } from "@reduxjs/toolkit";
import { addEntity, addEntities, removeEntity, removeEntities } from "../../helpers/entitiesHelper";

// Methods
const slice = createSlice({
    name: "assembly",
    initialState: {},
    reducers: {
        assemblyAdded: addEntity(),
        assembliesAdded: addEntities(),
        assemblyDeleted: removeEntity(),
        assembliesDeleted: removeEntities()
    }
})

// Exports
export default slice.reducer
export const {
    assemblyAdded, assembliesAdded, 
    assemblyModified, assembliesModified, 
    assemblyDeleted, assembliesDeleted
} = slice.actions