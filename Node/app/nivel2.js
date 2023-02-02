//Nivel 2, ejercicio 1
/*Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior. */

export const duplicate = number => {
    return new Promise((resolve, reject) => {
        if(isNaN(number)) reject('Beep6! Ups! Tienes que especificar un número')
        const result = number * 2
        setTimeout(() => {
        }, 2000)
        resolve(result)
    })
}

export const doDoubles = async(num1, num2, num3) => {
    try {
        const result1 = await duplicate(num1)
        const result2 = await duplicate(num2)
        const result3 = await duplicate(num3)
        return result1 + result2 + result3
    } catch (error) {
        throw error
    }
}

// const test = async( callback)

//Nivel 2, ejercicio 2
/*Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe. */

export class Person {
    constructor(name) {
        this.name = name
    }

    dirName() {
        console.log(this.name);
    }
}

//Nivel 3, ejercicio 1
/*Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. 
Invoca-la amb diferents definicions. */

export class Game {
    constructor() {
        try {
            throw new Error("You can't do that")
            
        } catch (error) {
            return error
        }
    }
}

export const createGame = (title, value) => {
    let product = Object.create(Game.prototype)
    product.title = title
    product.value = value
    return product
}