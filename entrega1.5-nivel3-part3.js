/*Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a 
generar una còpia de l'inicial.
Inclou un README amb instruccions per a l'execució de cada part. */

import fs from "fs"
import crypto from "crypto"

const PASSWORD = 'Clave secreta'
const IV = '1234567812345678'
const KEY = crypto.scryptSync(PASSWORD, 'si', 24)

const decryptFile = (file, encoding) => {
    const descipher = crypto.createDecipheriv('aes-192-cbc', KEY, IV)
    let decrypted = descipher.update(file, encoding, 'utf8')
    // console.log(file)
    // console.log(encoding)
    decrypted += descipher.final('utf8')
    return decrypted
}

const uncryptDocument = encoding => {
        fs.readFile(`./texto-nivel1-${encoding}-encrypted.txt`, 'utf8', (error, data) => {
            if (error) return console.log(error)
            const cryptedData = decryptFile(data, encoding)

            fs.writeFile(`./texto-nivel1-${encoding}-copy.txt`, cryptedData, error => {
                if (error) console.log(error)
            })
        })
}

uncryptDocument('base64')
uncryptDocument('hex')