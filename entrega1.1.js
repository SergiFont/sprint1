//Nivel 1, Ejercicio 1

const showName = name => console.log(name)

showName("Sergi")

////////////////////////
//Nivel 2, Ejercicio 1

const firstName = "Sergi"
const surname = "Font Puig"

console.log(`${firstName} ${surname}`)

//Nivel 2, Ejercicio 2

const showValue = () => "Hola, estoy dentro de un template literal"

const message = `La función nos dice: ${showValue()}`

console.log(message)

/////////////////////////
//Nivel 3, Ejercicio 1

/*Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció 
compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se 
per consola el compte del 0 al 9 deu vegades. */

const arr = []

for (let i = 0 ; i < 10 ; i++) {
    arr[i] = () => {
        for(let counter = 0 ; counter < 10 ; counter++){
            console.log(counter)
        }
    }
}

for(let id = 0 ; id < 10 ; id++) {
    arr[id]()
}

//Nivel 3, ejercicio 2

const anonymous = function (name) {
    console.log(name) 
}("Juan")