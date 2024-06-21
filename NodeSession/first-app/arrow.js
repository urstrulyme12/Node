/**
 arrow function does not bind there own this value.
 donot have access to this as reference
 arrow functions are best suited for methods,properties
 */
const result ={
    name:'Airlines',
    printEventName : function(){
        debugger;
        console.log('hello the function name is:'+ this.name)
    }
}
result.printEventName();
console.log(typeof result)

const resulted ={
    name:'Airlines',
    list:['sanvi','sali','sree'],
    printEventName (){
        console.log('hello the function name is:'+ this.name)
        this.list.forEach((listValue)=>{
            console.log(listValue +'is here on'+this.name)

        })
    }
}
resulted.printEventName();
console.log(typeof resulted)

// below code return undefined
const event ={
    name:'Airlines',
    printEventName : (name)=>{
        console.log('hello the name is:'+ name)
    }
}
event.printEventName();
console.log(typeof event)
