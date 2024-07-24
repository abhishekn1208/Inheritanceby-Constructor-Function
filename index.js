
CreateAnimal.prototype.makeSound = function(){
    console.log("Woof...")
}

function CreateAnimal(name,sound){
    this.name = name;
    this.sound = sound;
    
}

Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype)

CreateDog.prototype. fetch = function(){
    console.log( `${this.name} fetches the ball`)
 }
function CreateDog(name,sound,breed){
    CreateAnimal.call(this,name,sound)
    
    this.breed  = breed;

}

let p2 = new CreateDog("Buddy","Woof","Labrador")
console.log(p2.makeSound())
console.log(p2.fetch())