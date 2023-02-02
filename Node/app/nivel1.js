/*Nivell 1
Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. 
Testeja la correcta execució d'aquestes funcions.
Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici 
Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).
Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2. */

export const addition = (num1, num2) => {
    try {
        if(isNaN(num1) || isNaN(num2)) throw new Error("Please, insert numbers")
        if(!Number.isInteger(num1) || !Number.isInteger(num2)) throw new Error("Please, insert integer numbers")
        const result = num1 + num2
        return result
    } catch (error) {
        return error
    }
}

export const subtraction = (num1, num2) => {
    try {
        if(isNaN(num1) || isNaN(num2)) throw new Error("Please, insert numbers")
        if(!Number.isInteger(num1) || !Number.isInteger(num2)) throw new Error("Please, insert integer numbers")
        const result = num1 - num2
        return result
    } catch (error) {
        return error
    }
}

export const multiply = (num1, num2) => {
    try {
        if(isNaN(num1) || isNaN(num2)) throw new Error("Please, insert numbers")
        if(!Number.isInteger(num1) || !Number.isInteger(num2)) throw new Error("Please, insert integer numbers")
        const result = num1 * num2
        return result  
    } catch (error) {
        return error
    }
}

export const division = (num1, num2) => {
    try {
        if(isNaN(num1) || isNaN(num2)) throw new Error("Please, insert numbers")
        if(!Number.isInteger(num1) || !Number.isInteger(num2)) throw new Error("Please, insert integer numbers")
        const result = num1 / num2
        return result
    } catch (error) {
        return error
    }
}

//Nivel 1, ejercicio 2
/*Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció 
un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */

export const showNumber = (number, callback) => {
    return callback(number)
}

export const sendMessage = number => {
    return isNaN(number) ? false
                         : true
}

///////////////
//Nivel 2, ejercicio 1
/*Donats els objectes employees i salaries, crea una arrow function getEmployee() 
que retorni una Promise efectuant la cerca en l'objecte pel seu id. */

export let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
},{
    id: 4,
    name: 'Sergi' 
},{
    id: 5
}];
 
export let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

export const getEmployee = id => {
    return new Promise((resolve, reject) => {
        if(isNaN(id)) reject('Introduce un id válido')
        const employee = employees.find(element => id === element?.id)
        
        employee ? resolve(employee) : reject(`No existe un empleado con el id ${id}`)
    })
}
//Nivel 2, ejercicio 2
/*Crea una altra arrow function getSalary() similar a l'anterior que rebi com a 
paràmetre un objecte employee i retorni el seu salari. */

export const getSalary = emplObject => {
    return new Promise (( resolve,reject ) => {
        if( !emplObject ) reject ('El empleado no existe')
        const id = emplObject?.id
        const salary = salaries.find ( element => id === element?.id)?.salary
        salary ? resolve ( salary )
               : reject (`El empleado ${emplObject.name} aún no tiene salario asignado.`)
    })
}

//Nivel 1, ejercicio 2
/*Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva 
funció resolve() després de 2 segons de la seva invocació. */

export const orderSomething = async time => {
    try {
        return await waitPlease(time)

    } catch (error) {
        throw error
    }
}

export const waitPlease = async(time = 2000) => { //pongo un default para luego poder forzar un error en el nivel 3
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(time > 2000) reject('Beep5! Ups! Algo ha ido mal.')
            resolve('Soy el ejercicio 2 del nivel 1. Gracias por esperar. Aqui tienes')
        }, time) //aqui pondría el 2000 directamente, sin parámetros ni argumentos, si no fuera por el nivel 3
    })
}