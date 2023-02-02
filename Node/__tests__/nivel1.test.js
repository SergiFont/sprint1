import { addition, subtraction, multiply, division } from "../app/nivel1.js"
import {describe, expect, test} from '@jest/globals'
import { showNumber, sendMessage, employees, salaries, getEmployee, getSalary, orderSomething, waitPlease } from "../app/nivel1.js"


// Crea un archivo con las funciones sumar, restar, multiplicar y dividir dos o más operadores. 
// Testea la correcta ejecución de estas funciones.

describe('addition, testing errors and results', () => {
    test('As a user, insert numbers then I expect the result to do an addition operation', () => { // normal addition
        //assert
        const userNumber1 = 10
        const userNumber2 = 14
        const expectedResult = 24
    
        //act
        const result = addition(userNumber1, userNumber2)
    
        //expect
        expect(result).toEqual(expectedResult)
    })
    
    test('As a user, insert a float number, then I expect an error called: Please, insert an integer number', () => { // float number error
        //assert
        const userNumber1 = 1.5
        const userNumber2 = 14
        const expectedResult = Error("Please, insert integer numbers")
    
        //act
        const result = addition(userNumber1, userNumber2)
    
        //expect
        expect(result).toEqual(expectedResult)
    })
    
    test('As a user, insert a float number, then I expect an error called: Please, insert an integer number', () => { // not valid number error
        //assert
        const userNumber1 = "asd"
        const userNumber2 = 14
        const expectedResult = Error("Please, insert numbers")
    
        //act
        const result = addition(userNumber1, userNumber2)
    
        //expect
        expect(result).toEqual(expectedResult)
    })

})

describe("subtraction, testing errors and results", () => {
    test('As a user, insert numbers then I expect the result to do a subtraction operation', () => { //normal subtraction
        //assert
        const userNumber1 = 10
        const userNumber2 = 14
        const expectedResult = -4
    
        //act
        const result = subtraction(userNumber1, userNumber2)
    
        //expect
        expect(result).toEqual(expectedResult)
    })

    test('As a user, insert a float number, then I expect an error called: Please, insert an integer number', () => { // float number error
        //assert
        const userNumber1 = 1.5
        const userNumber2 = 14
        const expectedResult = Error("Please, insert integer numbers")
    
        //act
        const result = subtraction(userNumber1, userNumber2)
    
        //expect
        expect(result).toEqual(expectedResult)
    })
    
    test('As a user, insert a float number, then I expect an error called: Please, insert an integer number', () => { // not valid number error
        //assert
        const userNumber1 = "asd"
        const userNumber2 = 14
        const expectedResult = Error("Please, insert numbers")
    
        //act
        const result = subtraction(userNumber1, userNumber2)
    
        //expect
        expect(result).toEqual(expectedResult)
    })

})

describe("multiply, testing errors and results", () => {
    test('As a user, insert numbers then I expect the result to do a multiply operation', () => { // normal multiply
        //assert
        const userNumber1 = 5
        const userNumber2 = 9
        const expectedResult = 45
    
        //act
        const result = multiply(userNumber1, userNumber2)
    
        //expect
        expect(result).toEqual(expectedResult)
    })

    test('As a user, insert a float number, then I expect an error called: Please, insert an integer number', () => { // float number error
        //assert
        const userNumber1 = 1.5
        const userNumber2 = 14
        const expectedResult = Error("Please, insert integer numbers")
    
        //act
        const result = multiply(userNumber1, userNumber2)
    
        //expect
        expect(result).toEqual(expectedResult)
    })
    
    test('As a user, insert a float number, then I expect an error called: Please, insert an integer number', () => { // not valid number error
        //assert
        const userNumber1 = "asd"
        const userNumber2 = 14
        const expectedResult = Error("Please, insert numbers")
    
        //act
        const result = multiply(userNumber1, userNumber2)
    
        //expect
        expect(result).toEqual(expectedResult)
    })
})

describe("division, testing errors and results", () => {
    test('As a user, insert numbers then I expect the result to do a division operation', () => { // normal division
        //assert
        const userNumber1 = 21
        const userNumber2 = 3
        const expectedResult = 7
    
        //act
        const result = division(userNumber1, userNumber2)
    
        //expect
        expect(result).toEqual(expectedResult)
    })

    test('As a user, insert a float number, then I expect an error called: Please, insert an integer number', () => { // float number error
        //assert
        const userNumber1 = 1.5
        const userNumber2 = 14
        const expectedResult = Error("Please, insert integer numbers")
    
        //act
        const result = division(userNumber1, userNumber2)
    
        //expect
        expect(result).toEqual(expectedResult)
    })
    
    test('As a user, insert a float number, then I expect an error called: Please, insert an integer number', () => { // not valid number error
        //assert
        const userNumber1 = "asd"
        const userNumber2 = 14
        const expectedResult = Error("Please, insert numbers")
    
        //act
        const result = division(userNumber1, userNumber2)
    
        //expect
        expect(result).toEqual(expectedResult)
    })
})

/*Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici 
Promises i Callbacks N1 E2. */

describe('trying message sender', () => {
    test('given a number, expecting a true', () => {

        //assert
        const expectedResult = true
        const userNumber = 5   
    
        //act
        const result = showNumber(userNumber, sendMessage)
        
        //expect
        expect(result).toEqual(expectedResult)
    })

    test('given a NaN, expecting a false', () => {
        
        //assert
        const expectedResult = false
        const userNumber = "asd"   
    
        //act
        const result = showNumber(userNumber, sendMessage)
        
        //expect
        expect(result).toEqual(expectedResult)
    })
})

/*Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises
 i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()). */

 describe('retrieve properties of objects within an array', () => {
    test("given an id, find the employee within the array of objects", () => {

        //assert
        const id = 1
        const expectedResult = 'Linux Torvalds'
        
        //expect
        getEmployee(id).then(employee => expect(employee.name).toBe(expectedResult))
        
    })

    test("given a non existent id, return an error message", () => {

        const id = 6
        const expectedResult = `No existe un empleado con el id ${id}`

        expect.assertions(1)
        getEmployee(id).catch(error => expect(error).toBe(expectedResult))
    })

    test("given a non valid id, return an error message", () => {

        const id = "asd"
        const expectedResult = 'Introduce un id válido'

        expect.assertions(1)
        getEmployee(id).catch(error => expect(error).toBe(expectedResult))
        })

    test("given an id, find the salary attached to said id", () => {

        const employee = employees[0]
        const expectedResult = 4000

        getSalary(employee).then(salary => expect(salary).toBe(expectedResult))
    })

    test("given a non existent employee, return an error message", () => {

        const employee = employees[5]
        const expectedResult = 'El empleado no existe'

        expect.assertions(1)
        getSalary(employee).catch(error => expect(error).toBe(expectedResult))
    })

    test("given a employee with no salary assigned, return an error message", () => {

        const employee = employees[3]
        const expectedResult = `El empleado ${employee.name} aún no tiene salario asignado.`

        expect.assertions(1)
        getSalary(employee).catch(error => expect(error).toBe(expectedResult))
    })
 })


 /*Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2. */

describe("testing async functions with promises and setTimeout", () => {
    test("given a time parameter that pass through the condicional, it should execute fine", async() => {

        const time = 2000
        const expectedResult = 'Soy el ejercicio 2 del nivel 1. Gracias por esperar. Aqui tienes'

        const result = await orderSomething(time)

        expect(result).toBe(expectedResult)

    })

    test("given a time parameter that do not pass through the condicional, it should return an error", async() => {

        const time = 3000
        const expectedResult = 'Beep5! Ups! Algo ha ido mal.'

        expect.assertions(1)
        await orderSomething(time).catch(error => expect(error).toBe(expectedResult))

    })
})




