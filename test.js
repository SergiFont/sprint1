const fs = require('fs');
const { pipeline } = require('stream');
const zlib = require('zlib')
const { exec } = require('child_process');
const crypto = require('crypto');
const { encode } = require('punycode');

//Nivel 1, ejercicio 1
/*Crea una funció que, en executar-la, escrigui una frase en un fitxer. */

const words = 'Hola! Felicidades por llegar hasta aquí!'

const writeWords = async() => {
    return new Promise((res, rej) => {
        res(fs.writeFile('./texto-nivel1.txt', words, error => {
            if(error) rej(console.log(error))
        }))
    })
}

// writeWords()

//Nivel 1, ejercicio 2
/*Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior. */

const printFileContent = async() => {
    return new Promise((res, rej) => {
        fs.readFile('./texto-nivel1.txt', 'utf8', (error, data) => {
            if (error) rej(error)
            res(console.log(data))
        })
    })
}
// printFileContent()

//Nivel 1, ejercicio 3
/*Crea una funció que comprimeixi el fitxer del nivell 1. */


const zipFile = async() => {
    return new Promise((res, rej) => {
        const gzip = zlib.createGzip()
        const source = fs.createReadStream('texto-nivel1.txt')
        const destination = fs.createWriteStream('texto-nivel1.txt.gz')
        res(pipeline(source, gzip, destination, (err) => {
        if(err) rej(console.error(err))
        }))
    })
}

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

//Nivel 2, ejercicio 2
/*Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador 
utilizant Node Child Processes. */

const showDir = async() => {
    return new Promise((resolve, reject) => {
        exec('dir', (error, stdout, stderr) => {
            if (error) {
                reject(console.log(`error: ${error.message}`))
            }
            if (stderr) {
                reject(console.log(`stderr: ${stderr}`))
            }
            resolve(console.log(`stdout: ${stdout}`))
        })
    })
}

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

const encodeFile = (encoding, data) => {
    const buffer = Buffer.from(String(data)).toString(encoding)
    fs.writeFile(`./texto-nivel1-${encoding}.txt`, buffer, error => {
        if(error) {
            console.log(error)
        }
    })// TODO EL PROBLEMA ESTA AQUI!!!!!!! comparar con test
}

// TODO EL PROBLEMA ESTA AQUI!!!!!!! comparar con entrega1.5
// encodeFile("hex")

// const toBuffer = (data, encoding) => {
//     const buffer = Buffer.from(String(data)).toString(encoding)
//         fs.writeFile(`./texto-nivel1-${encoding}.txt`, buffer, error => {
//             if(error) console.log(error)
//     })
// }


// const hex = encodeFile('hex')
// const base64 = encodeFile('base64')

// const KEY = Buffer.from(crypto.randomBytes(24), "hex")
// const IV = Buffer.from(crypto.randomBytes(12), "hex")
const KEY = Buffer.from("6a97a88e993b645c315a52d810617641d311dbde52cda19f", "hex")
const IV =  Buffer.from("abe5d902bb2d112f8925a93f", "hex")

const cipherFile = file => {
        const cipher = crypto.createCipheriv('aes-192-ccm', KEY, IV, {authTagLength: 12})
        let encrypted = cipher.update(file, 'utf8', 'base64')
        encrypted += cipher.final('base64')
        return encrypted
}

const decipherFile = file => {
    const descipher = crypto.createDecipheriv('aes-192-ccm', KEY, IV, {authTagLength: 12})
    let result = descipher.update(file, 'base64', 'utf8')
    result += descipher.final('utf8')
    return result
}

// const createAndDelete = file => {
//     fs.writeFile(`./archivo-nivel3-aes-192-cipher.txt`, cipherFile(String(file)), error => {
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

// createAndDelete(hex)
// createAndDelete(base64)

const doTheThing = async() => {
    await writeWords()
        .then(printFileContent())
        .catch(error => console.log(error))
            .then(zipFile())
            .catch(error => console.log(error))
                .then(showDir())
                .catch(error => console.log(error))
}

doTheThing()

const doNextThing = () => {
    doTheThing()
    const data = fs.readFile('./texto-nivel1.txt', 'utf8', (error, data) => {
        if(error) return console.log(error)
        return data
    })
    console.log(data)
    const hex = encodeFile("hex", data)
    const base64 = encodeFile("base64", data)
    return {hex, base64}
}

// doNextThing()

// const encryptFiles = () => {
//     const {hex, base64} = doNextThing()
//     fs.writeFile(`./archivo-nivel3-aes-192-cipher-hex.txt`, String(cipherFile(hex)), error => {
//                 if(error) {
//                     console.log(error)
//                 }
//             })
//     fs.writeFile(`./archivo-nivel3-aes-192-cipher.base64.txt`, String(cipherFile(base64)), error => {
//         if(error) console.log(error)
        
//     })
    
// }

// encryptFiles()


