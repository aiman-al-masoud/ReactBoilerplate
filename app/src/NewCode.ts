export default class NewClass{
    
    name:string

    constructor(name:string){
        this.name = name
    }

    sayHi(){
        console.log(`Hello, I'm: ${this.name}`)
    }

}

