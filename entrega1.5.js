import fs from "fs"
import { pipeline } from "stream"
import zlib from "zlib"
import { exec } from "child_process"
import crypto from "crypto"

//Nivel 1, ejercicio 1
/*Crea una funció que, en executar-la, escrigui una frase en un fitxer. */

const writeWords = (text, fileName) => {
    fs.writeFile(fileName, text, error => {
        if (error) {
            console.log(error)
        }
    })
}

writeWords('Hola! Felicidades por llegar hasta aquí!', './texto-nivel1.txt')

//Nivel 1, ejercicio 2
/*Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior. */

const printFileContent = fileName => {
    setTimeout(() => {
        fs.readFile(fileName, 'utf8', (error, data) => {
            if (error) throw error
            console.log(data)
        })
    }, 500)
}
printFileContent('./texto-nivel1.txt')



//Nivel 1, ejercicio 3
/*Crea una funció que comprimeixi el fitxer del nivell 1. */

const compress = (gzip, source, destination) => {
    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error(err)
        }
    })
}

compress(zlib.createGzip(), fs.createReadStream('texto-nivel1.txt'), fs.createWriteStream('texto-nivel1.txt.gz'))


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

const printDir = directory => {
    exec(`cd ${directory} && dir`, (error, stdout, stderr) => {
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
}

printDir('C:/Users')