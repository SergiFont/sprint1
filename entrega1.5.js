// const fs = require('fs');
// const { pipeline } = require('stream');
// const zlib = require('zlib')
// const { exec } = require('child_process');
// const crypto = require('crypto')
import fs from "fs"
import {pipeline} from "stream"
import zlib from "zlib"
import {exec} from "child_process"
import crypto from "crypto"

//Nivel 1, ejercicio 1
/*Crea una funció que, en executar-la, escrigui una frase en un fitxer. */

const writeWords = text => {
        fs.writeFile('./texto-nivel1.txt', text, error => {
            if(error) {
                console.log(error)
            }
        })
}

writeWords('Hola! Felicidades por llegar hasta aquí!')

//Nivel 1, ejercicio 2
/*Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior. */

const printFileContent = () => {
    fs.readFile('./texto-nivel1.txt', 'utf8', (error, data) => {
        if (error) throw error
        console.log(data)
    })
}
printFileContent()

//Nivel 1, ejercicio 3
/*Crea una funció que comprimeixi el fitxer del nivell 1. */

const gzip = zlib.createGzip()
const source = fs.createReadStream('texto-nivel1.txt')
const destination = fs.createWriteStream('texto-nivel1.txt.gz')

pipeline(source, gzip, destination, (err) => {
    if(err) {
        console.error(err)
    }
})

//Nivel 2, ejercicio 1
/*Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon. */

const printCountdown = number => {
    
        console.log(number)
    
        const newNumber = number - 1
        if (newNumber > 0) {
            setTimeout(() => {
                printCountdown(newNumber)
            }, 1000)
        }
    }

printCountdown(10)
// mirar setInterval

//Nivel 2, ejercicio 2
/*Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador 
utilizant Node Child Processes. */

exec('dir', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`)
        return
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
    }
    console.log(`stdout: ${stdout}`)
})

//Nivel 3, ejercicio 1
/*Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, 
a partir del fitxer del nivell 1.
TODO Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, 
i esborri els fitxers inicials. 
TODO Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a 
generar una còpia de l'inicial.
Inclou un README amb instruccions per a l'execució de cada part.*/

// const data = fs.readFile('./texto-nivel1.txt', 'utf8', (error, data) => {
//     if(error) return console.log(error)
//     return data
// })

// const encodeFile = encoding => {
//     const buffer = Buffer.from(String(data)).toString(encoding)
//     fs.writeFile(`./texto-nivel1-${encoding}.txt`, buffer, error => {
//         if(error) {
//             console.log(error)
//         }
//     })
//     console.log(data)// TODO EL PROBLEMA ESTA AQUI!!!!!!! comparar con test
// }
// const hex = encodeFile('hex')
// const base64 = encodeFile('base64')

// // const KEY = Buffer.from(crypto.randomBytes(24), "hex")
// // const IV = Buffer.from(crypto.randomBytes(12), "hex")
// const KEY = Buffer.from("6a97a88e993b645c315a52d810617641d311dbde52cda19f", "hex")
// const IV =  Buffer.from("abe5d902bb2d112f8925a93f", "hex")

// const cipherFiles = file => {
//     const cipher = crypto.createCipheriv('aes-192-ccm', KEY, IV, {authTagLength: 12})
//     let encrypted = cipher.update(file, 'utf8', 'base64')
//     encrypted += cipher.final('base64')
//     return (encrypted)
// }
    

// const decipherFiles = file => {
//     const descipher = crypto.createDecipheriv('aes-192-ccm', KEY, IV, {authTagLength: 12})
//     let result = descipher.update(file, 'base64', 'utf8')
//     result += descipher.final('utf8')
//     return result
// }

// const createAndDelete = file => {
//     fs.writeFile(`./archivo-nivel3-aes-192-cipher.txt`, cipherFiles(String(file)), error => {
//         if(error) {
//             console.log(error)
//         }
//     })

//     exec('del "texto-nivel1-base64.txt"', (error, stdout, stderr) => { // TODO cambiar a comando para borrar archivo
//         if (error) {
//             console.log(`error: ${error.message}`)
//             return
//         }
//         if (stderr) {
//             console.log(`stderr: ${stderr}`)
//             return
//         }
//         console.log(`File deleted succesfully`)
//     })
// }

// // const firstFile = fs.readFile('./archivo-nivel3-aes-192-cipher.txt', 'utf8', (error, data) => {
// //     if (error) throw error
// //     return (data)
// // })

// // console.log(firstFile)

// createAndDelete(hex)
// createAndDelete(base64)