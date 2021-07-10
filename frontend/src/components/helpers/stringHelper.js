const convert = string => new StringConverter(string)

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

export default convert