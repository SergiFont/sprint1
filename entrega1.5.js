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

//Nivel 3, ejercicio 1
/*Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, 
a partir del fitxer del nivell 1.
Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, 
i esborri els fitxers inicials. 
TODO Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a 
generar una còpia de l'inicial.
Inclou un README amb instruccions per a l'execució de cada part.*/


const encodeFile = encoding => {
    const data = fs.readFile('./texto-nivel1.txt', 'utf8', (error, data) => {
        if (error) return console.log(error)
        return data
    })
    const buffer = Buffer.from(String(data)).toString(encoding)
    fs.writeFile(`./texto-nivel1-${encoding}.txt`, buffer, error => {
        if (error) {
            console.log(error)
        }
    })
}

encodeFile('hex')
encodeFile('base64')

const KEY = Buffer.from("6a97a88e993b645c315a52d810617641d311dbde52cda19f", "hex")
const IV = Buffer.from("abe5d902bb2d112f8925a93f", "hex")

const cipherFiles = (file, encoding) => {
    const cipher = crypto.createCipheriv('aes-192-ccm', KEY, IV, { authTagLength: 12 })
    let encrypted = cipher.update(file, 'utf8', encoding)
    encrypted += cipher.final(encoding)
    return encrypted
}

const encryptDocument = encoding => {
    setTimeout(() => {
        fs.readFile(`./texto-nivel1-${encoding}.txt`, 'utf8', (error, data) => {
            if (error) return console.log(error)

            const buffer = Buffer.from(String(cipherFiles(data, encoding))).toString(encoding)

            fs.writeFile(`./texto-nivel1-${encoding}-encrypted.txt`, buffer, error => {
                if (error) console.log(error)

                // fs.unlink(`./texto-nivel1-${encoding}.txt`, error => {
                //     if (error) console.log(error)
                // })
            })
        })
    }, 500)
}

encryptDocument('base64')
encryptDocument('hex')

const decipherFiles = (file, encoding) => {
    const descipher = crypto.createDecipheriv('aes-192-ccm', KEY, IV, {authTagLength: 12})
    let decrypted = descipher.update(file, encoding, 'utf8')
    // console.log(file)
    // console.log(encoding)
    // decrypted += descipher.final('utf8')
    return decrypted
}

const uncryptDocument = encoding => {
    setTimeout(() => {
        fs.readFile(`./texto-nivel1-${encoding}-encrypted.txt`, 'utf8', (error, data) => {
            if (error) return console.log(error)
            // console.log(data)
            // console.log(encoding)

            const buffer = Buffer.from(String(decipherFiles(data, encoding))).toString(encoding)

            fs.writeFile(`./texto-nivel1-${encoding}-copy.txt`, buffer, error => {
                if (error) console.log(error)
            })
        })
    }, 700)
}

uncryptDocument('base64')
uncryptDocument('hex')

/* TODO probar de usar async awaits para llamar a los pasos en vez de usar setTimeout.
Según Omar, el texto cifrado en hex y base64 'texto-nivel1-hex.txt' es muy corto, es posible que se corte el proceso en mitad
y eso de errores internos en la desencryptación */