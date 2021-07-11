export const submitFormHelper = ({auto, cb}) => e => {
    if(!auto) e.preventDefault()
    if(cb) cb(e)
}