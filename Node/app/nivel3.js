import fs from "fs"
import {employees, salaries} from "./data.json"

/*Rehaz los ejercicios Promisas y Callbacks N2 E1 y Promisas y Callbacks N2 E2 (getEmployee() y getSalary()) 
de forma que accedan a los datos de un archivo externo JSON. Crea tests que demuestren la correcta 
ejecución del ejercicio haciendo un mock del archivo JSON.*/

export const getEmployee = id => {
    return new Promise((resolve, reject) => {
        if(isNaN(id)) reject('Introduce un id válido')
        const employee = employees.find(element => id === element?.id)
        employee ? resolve(employee) : reject(`No existe un empleado con el id ${id}`)
    })
}

export const getSalary = emplObject => {
    return new Promise((resolve, reject) => {
        if(!emplObject) reject('El empleado no existe')
        const id = emplObject.id
        const salary = salaries.find(element => id === element.id)?.salary
        salary ? resolve(salary)
        : reject(`El empleado ${emplObject.name} aún no tiene salario asignado.`)
    })
}       
// export const readEmployeeList= () => {
//     const info = fs.readFileSync("./employees.json", {encoding: 'utf-8'})
//     const employees = JSON.parse(info)
//     return employees
// }
// export const readSalaryList= () => {
//     const info = fs.readFileSync("./salaries.json", {encoding: 'utf-8'})
//     const salaries = JSON.parse(info)
//     return salaries
// }