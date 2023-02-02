import { describe, expect, test, jest } from '@jest/globals'
import { duplicate, doDoubles, Person, Game, createGame } from "../app/nivel2.js"
jest.spyOn(global, 'setTimeout')
jest.useFakeTimers()

/*Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.*/

describe("testings for the functions that duplicate numbers after a set time", () => {
    test("given a number as parameters, it should calculate its double after a set time", async() => {

        const num = 10
        const expectedResult = 20

        await duplicate(num).then(result => expect(result).toBe(expectedResult))
    })

    test("given a string as parameter, it should reject an error message", async() => {
        const fakeNum = "asd"
        const expectedResult = 'Beep6! Ups! Tienes que especificar un número'

        await duplicate(fakeNum).catch(error => expect(error).toBe(expectedResult))
    })
})

describe("testing the function that add numbers after recieving the resolution of a promise ", () => {
    test("given three numbers as parameters, it should calculate each one doubles, then add all the numbers ", async() => {

        const num1 = 2
        const num2 = 3
        const num3 = 5
        const expectedResult = 20

        await doDoubles(num1, num2, num3).then(result => expect(result).toBe(expectedResult))
    })

    test("given one string among the three parameters, it should reject an error message", async() => {
        const num1 = 1
        const num2 = 5
        const num3 = "sus"
        const expectedResult = 'Beep6! Ups! Tienes que especificar un número'

        await doDoubles(num1, num2, num3).catch(error => expect(error).toBe(expectedResult))
    })
})

/*Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. 
dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen. */

describe("testing class constructors and its methods", () => {
    
    test("creating an instance of the class and executing calling it's method, it should do it", () => {
        jest.mock("../app/nivel2.js")
        const expectedResult = "Sergi"
        const person = new Person("Sergi")
        const mock = jest.fn()
        Person.prototype.dirName = mock
        mock.mockReturnValue("Sergi")

        const result = mock()

        expect(result).toBe(expectedResult)
    })

/*Verifica mitjançant tests la creació d'instàncies de la classe abstracta de 
l'exercici Classes & Arrow Functions N3 E1.s*/
    test("creating an instance of the abstract class", () => {

        const game = createGame("Zelda", 10)

        expect(game).toEqual({ title: 'Zelda', value: 10 })
    })

    test("trying to create an object calling the constructor of the class Game, should throw an error", () => {

        const result = new Game

        expect(result).toThrowError
    })
})
