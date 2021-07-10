const convert = (string) =>{
    return new StringConverter(string)
}

class StringConverter {
    constructor(string){
        this.string = string 
    }
    toDashed = () => this.string.replace(/(\A\w)|(\s\w)/g, m => "-" + m.toLowerCase());
    toTitle = () => this.string.replace(/(\A\w)|(\s\w)/g, m => " " + m.toUpperCase())
    toCamel = () => this.string.replace(/(\A\w)|(\s\w)/g, m => m.toUpperCase())
    toSpaced = () => this.string 
    fromDashed = () => {
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