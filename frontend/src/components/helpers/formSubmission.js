export const submitFormHelper = ({auto, cb}) => e => {
    auto ? e.preventDefault() : null 
    cb ? cb(e) : null
}