export const checkInputId = props => { //checks and formats id 
    let {id, name, label} = props 
    id = id || name || label 
    if(!id) {
        console.warn("FormSelect Element does not include an id or name or label; include at least one or face my wrath")
        return false 
    }
    return id
}