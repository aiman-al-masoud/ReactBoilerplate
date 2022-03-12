import NewClass from "./NewCode"

export default class LegacyClass{
    constructor(name){
        this.name = name
        this.newClassInst = new NewClass("new class")
    }

    sayBye(){
        console.log(`Bye bye, my name was: ${this.name}`)
        this.newClassInst.sayHi()
    }
} 