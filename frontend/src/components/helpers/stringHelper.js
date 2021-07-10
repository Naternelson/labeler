const convert = string => new StringConverter(string)
const express = obj => new StringNumber(obj)

class StringConverter {
    constructor(string){
        this.string = string 
    }
    toDashed = () => this.string.replace(/(\s\w)/g, m => "-" + m.trim().toLowerCase());
    toTitle = () => this.string.replace(/(\A\w)|(\s\w)/g, m => " " + m.toUpperCase()).trim()
    toCamel = () => this.string.replace(/(\s\w)/g, m => m.trim().toUpperCase())
    toUnderscore = () => this.string.replace(/(\s\w)/g, m => "_" + m.trim().toUpperCase())
    toSpaced = () => this.string 

    fromUnderscore = () => {
        let string = this.string.replace(/(_)/g, () => " ")
        let string = string.toLowerCase()
        return new StringConverter(string)
    }
    fromDash = () => {
        let string = this.string.replace(/(-)/g, () => " ")
        let string = string.toLowerCase()
        return new StringConverter(string)
    }
    fromCamel = () => {
        let string = this.string.replace(/([A-Z])/g, m => " " + m.toLowerCase())
        string.trim()
        return new StringConverter(string)
    }
}


class StringNumber{
    constructor({number, zero, one, multiple}){
        this.number = parseInt(number, 10) || 0
        this.zeroSuffix = zero || multiple || ""
        this.oneSuffix = one || multiple || ""
        this.moreSuffix = multiple || ""
    }
    change = cb => {
        this.number = cb(this.number)
    } 
    render = () => {
        switch (this.number){
            case 0:
                const val =  this.number.toString() + " " +  this.zeroSuffix
                return val.trim()
            case 1:
                const val =  this.number.toString() + " " +  this.oneSuffix
                return val.trim()
            default:
                const val =  this.number.toString() + " " +  this.moreSuffix
                return val.trim()
        }
    }
}
export {convert, express}