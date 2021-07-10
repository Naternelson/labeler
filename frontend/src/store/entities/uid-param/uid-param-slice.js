// Imports
import { createSlice } from "@reduxjs/toolkit";
import { addEntity, addEntities, removeEntity, removeEntities } from "../../helpers/entitiesHelper";

// Methods
const slice = createSlice({
    name: "uidParam",
    initialState: {},
    reducers: {
        uidParamAdded: addEntity(),
        uidParamsAdded: addEntities(),
        uidParamDeleted: removeEntity(),
        uidParamsDeleted: removeEntities()
    }
})

// Exports
export default slice.reducer
export const {
    uidParamAdded, uidParamsAdded, 
    uidParamModified, uidParamsModified, 
    uidParamDeleted, uidParamsDeleted
} = slice.actions