console.log("Classes and Object in JavaScript")

// let obj = {
//     a : 1,
//     b : "aman"
// }

// console.log(obj)

// let animal = {
//     eats : true
// };

// let rabbit = {
//     jumps:true
// };

// rabbit.__proto__ = animal; //sets rabbit.[[Prototype]] = animal

// Define a base class named Animal
class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }

    eats() {
        console.log("EATING hehe")
    }

    jumps() {
        console.log("JUMPING hehe")
    }
}

// Define a subclass named Lion that extends Animal
class Lion extends Animal{
    constructor(name) {
        super(name) // super() function is used in the constructor to call the parent class's constructor
        this.name = name
        console.log("Object is created for the lion...")
    }
}

let a = new Animal("Cookie");
console.log(a)

let l = new Lion("Shera");
console.log(l)
// Refer JavaScript notes for OOP