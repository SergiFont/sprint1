let employees = [{
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
}];//creo nuevos objetos para forzar errorres del nivel 3
 
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
          !employee ?       reject(`El empleado no existe`) :
          !employee?.name ? reject('Aún no se ha registrado el nombre de este empleado') :
                            resolve(employee) 
    })
}

const getSalary = employeeObject => {
    return new Promise((resolve, reject) => {
        const id = employeeObject.id
        const salary = salaries.find(element => id === element.id)?.salary
        salary ? resolve(salary)
               : reject(`Hay un error en el salario de ${employeeObject.name}.`)
    })
}
//Nivel 1, ejercicio 1
/*Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de 
l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit 
a la tasca anterior. */

const getEmployeData = async id => {
    try {
        const employee = await getEmployee(id)
        const salary = await getSalary(employee)
        return `Employee ${employee.name} tiene un sueldo de ${salary}`
        
    } catch (error) {
        throw error
    }
}

getEmployeData(1)
    .then(result => console.log(`Soy el ejercicio 1 del nivel 1. ${result}`))
    .catch(error => console.log(error))

//Nivel 1, ejercicio 2
/*Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva 
funció resolve() després de 2 segons de la seva invocació. */

const orderSomething = async time => {
    try {
        return await waitPlease(time)

    } catch (error) {
        throw error
    }
}

const waitPlease = async(time = 2000) => { //pongo un default para luego poder forzar un error en el nivel 3
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(time > 2000) reject('Beep5! Ups! Algo ha ido mal.')
            resolve('Soy el ejercicio 2 del nivel 1. Gracias por esperar. Aqui tienes.')
        }, time) //aqui pondría el 2000 directamente, sin parámetros ni argumentos, si no fuera por el nivel 3
    })
}/*En esta parte me he encontrado problemas muy raros. Primero, si no hago el console.log directamente en el 
reject y resolve, cuando lo quiero realizar en el then y catch (linea 93 y 94), me devuelve undefined. 
Segundo, si no pongo el return en la línea 80, también me devuelve el resolve de la 81. Investigando he encontrado 
algo de que setTimeout se ejecuta en el scoope global. En mi cabeza no consigo unir las piezas,
aunque imagino que tendrá algo que ver. */

orderSomething()
    .then(message => console.log(message))
    .catch(error => console.log(error))

///////////////
//Nivel 2, ejercicio 1
/*Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior. */

const duplicate = async number => {
    return new Promise((resolve, reject) => {
        if(isNaN(number)) reject('Beep6! Ups! Tienes que especificar un número')
        setTimeout(() => {
            resolve(number *2)
        }, 2000)
    })
}

const doDoubles = async(num1, num2, num3) => {
    try {
        const res1 = await duplicate(num1)
        const res2 = await duplicate(num2)
        const res3 = await duplicate(num3)
        return  res1 + res2 + res3
    } catch (error) {
        throw error
    }
}

doDoubles(2, 4, 6)
    .then(result => console.log(result))
    .catch(error => console.log(error))

///////////////
//Nivel 3, ejercicio 1
/*Força i captura tants errors com puguis dels nivells 1 i 2. */

getEmployeData('asd') // id válido
    .then(result => console.log(result))
    .catch(error => console.log(`Beep1! ${error}`))

getEmployeData(7) // empleado no existe
    .then(result => console.log(result))
    .catch(error => console.log(`Beep2! ${error}`))

getEmployeData(4) // salario no asignado
    .then(result => console.log(result))
    .catch(error => console.log(`Beep3! ${error}`))

getEmployeData(5) // nombre no registrado
    .then(result => console.log(result))
    .catch(error => console.log(`Beep4! ${error}`))

orderSomething(6500) // tiempo límite superado, Beep 5
    .then(result => console.log(result))
    .catch(error => console.log(error))

doDoubles("asd", "asd", "asd") // NaN, Beep 6
    .catch(error => console.log(error))