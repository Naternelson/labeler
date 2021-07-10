export const addEntity = () => {
    return (store, action) => {
        store.data[action.payload.id] = action.payload.attributes
    }
}

export const addEntities = () => {
    return (store, action) => {
        action.payload.data.forEach(el => {
            store.data[el.id] = el.attributes
        })
    }
}

export const removeEntity = () => {
    return (store, action) => {
        delete store.data[action.payload.id]
    }
}

export const removeEntities = () => {
    return (store, action) => {
        action.payload.ids.forEach(el => {
            delete store.data[el]
        })
    }
}