export const dataChanger = objName => {
    return (s, a) => {
        s.data[objName] = a.payload
    }
}

export const orderChanger = () => {
    return (s, a) => {
        const {searchElement, beforeElement } = a.payload
        const indexPrimary = s.order.indexOf(searchElement)
        if(indexPrimary === -1) return 
        const el = s.order.splice(indexPrimary, 1)[0]
        const indexSecondary = s.order.indexOf(beforeElement)
        indexSecondary === -1 ? s.order.push(el) : s.order.splice(indexSecondary, 0, el)
    }
    

}