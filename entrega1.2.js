//Nivel 1, ejercicio 1

const test = (() => {
    return 2+2
})()

console.log(test)

///////////////
//Nivel 2, ejercicio 1

const arrowFunction = value => {
    const item = {
        key: value
    }
    return item
}
const item = arrowFunction(10)
console.log(item);

//Nivel 2, ejercicio 2
/*Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe. */

class Person {
    constructor(name) {
        this.name = name
    }

    dirName() {
        console.log(this.name);
    }
}

const person = new Person("Sergi")

person.dirName()


///////////////
//Nivel 3, ejercicio 1
/*Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. 
Invoca-la amb diferents definicions. */

class Game {
    constructor() {
        throw new Error("You can't do that")
    }
}

const createGame = (title, value) => {
    let product = Object.create(Game.prototype)
    product.title = title
    product.value = value
    return product
}

const zelda = createGame("Zelda", 40)
const lotr = createGame("Lord of the Rings", 50)
const cuphead = createGame("Cuphead", 20)

console.log(zelda);
console.log(lotr);
console.log(cuphead);