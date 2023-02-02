import { readEmployeeList, readSalaryList, getEmployee, getSalary } from "../app/nivel3.js";
import { describe, expect, test, jest } from '@jest/globals'

/*Rehaz los ejercicios Promisas y Callbacks N2 E1 y Promisas y Callbacks N2 E2 (getEmployee() y getSalary()) 
de forma que accedan a los datos de un archivo externo JSON. Crea tests que demuestren la correcta 
ejecución del ejercicio haciendo un mock del archivo JSON.*/

describe("testings for the functions getEmployee and getSalary, with json files ", () => {
    test("given an id, getEmployee should return the correct object", () => {
        jest.mock("../app/data.json")
        
        
        const expectedResult = {id: 1, name: "Linux Torvalds"}
        
        getEmployee(1)
            .then(employee => expect(employee).toMatchObject(expectedResult))
    })

    test("given a string as id, it should reject an error message", () => {
        jest.mock("../app/data.json")
        const expectedResult = 'Introduce un id válido'

        getEmployee("asd")
            .catch(error => expect(error).toBe(expectedResult))
    })

    test("given a non existent id, it should reject an error message", () => {
        jest.mock("../app/data.json")
        const expectedResult = `No existe un empleado con el id 4`

        getEmployee(4)
            .catch(error => expect(error).toBe(expectedResult))
    })

    // test("given an employee object, it should return the salarie of that employee", () => {
    //     jest.mock("../app/data.json")
    //     const expectedResult = 4000

    //     getSalary(employees[1])
    //         .then(result => expect(result).toBe(expectedResult))
    // })
    //TODO como hacer mock de un archivo JSON
})












/*Utilizando como base el ejercicio Async/Await, crea tests que fuercen errores de funcionamiento 
y verifique que los errores lanzados son los esperados. */