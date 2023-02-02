//Nivel 1, ejercicio 1
/*Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de 
si la Promise es resol o no. */

const verifyNum = num => {
    return new Promise((resolve, reject) => {
        if(num % 2 === 0) resolve(`Soy el ejercicio 1 del nivel 1. El número ${num} es par.`)
        else reject(`Soy el ejercicio 1 del nivel 1. El número ${num} es impar.`)
    })
}

verifyNum(5)
    .then(message => console.log(message))
    .catch(message => console.log(message))

//Nivel 1, ejercicio 2
/*Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció 
un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */

const sendNumber = (number, callback) => {
    const result = isNaN(number)        ? ("Soy el ejercicio 2 del nivel 1. Por favor, introduce un número")
                         : (`Soy el ejercicio 2 del nivel 1. El número introducido es ${number}`)
    callback(result)
}

const showMessage = patata => {
    console.log(patata)
}

sendNumber(6, showMessage)

///////////////
//Nivel 2, ejercicio 1
/*Donats els objectes employees i salaries, crea una arrow function getEmployee() 
que retorni una Promise efectuant la cerca en l'objecte pel seu id. */

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmployee = id => {
    return new Promise((resolve, reject) => {
        if(isNaN(id)) reject('Introduce un id válido')
        const employee = employees.find(element => id === element?.id)
        employee ? resolve(employee) : reject(`No existe un empleado con el id ${id}`)
    })
}

getEmployee(1)
    .then(employee => console.log(`Soy el ejercicio 1 del nivel 2. ${employee.name}`))
    .catch(error => console.log(`Soy el ejercicio 1 del nivel 2. ${error}`))


//Nivel 2, ejercicio 2
/*Crea una altra arrow function getSalary() similar a l'anterior que rebi com a 
paràmetre un objecte employee i retorni el seu salari. */

const getSalary = emplObject => {
    return new Promise((resolve,reject) => {
        if(!emplObject) reject('El empleado no existe')
        const id = emplObject.id
        const salary = salaries.find(element => id === element.id)?.salary
        salary ? resolve(salary)
               : reject(`El empleado ${emplObject.name} aún no tiene salario asignado.`)
    // el reject lo pongo por si en un futuro se actualizase el array employee
    })
}
getSalary(employees[2])
    .then(salary => console.log(`Soy el ejercicio 2 del nivel 2. Este empleado tiene un salario de ${salary}`))
    .catch(error => console.log(`Soy el ejercicio 2 del nivel 2. ${error}`))


//Nivel 2, ejercicio 3 y nivel 3, ejercicio 1
/*Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues 
promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari. */

/*Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri 
per la consola. */

getEmployee(1).then(employee => {
        getSalary(employee).then(salary => {
            console.log(`Soy el ejercicio 3 del nivel 2. ${employee.name}, ${salary}`)
    })
})
    .catch(error => console.log(`Soy el ejercicio 1 del nivel 3. ${error}`))