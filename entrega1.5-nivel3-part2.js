/*Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, 
i esborri els fitxers inicials.  */

import fs from "fs"
import crypto from "crypto"

const PASSWORD = 'Clave secreta'
const IV = '1234567812345678'
const KEY = crypto.scryptSync(PASSWORD, 'si', 24)

const cryptFile = (data, encoding) => {
    const cipher = crypto.createCipheriv('aes-192-cbc', KEY, IV)
    let encrypted = cipher.update(data, 'utf8', encoding)
    encrypted += cipher.final(encoding)
    return encrypted
}

const encryptDocument = encoding => {
        fs.readFile(`./texto-nivel1-${encoding}.txt`, 'utf8', (error, data) => {
            if (error) return console.log(error)


            fs.writeFile(`./texto-nivel1-${encoding}-encrypted.txt`, cryptFile(data, encoding), error => {
                if (error) console.log(error)

                fs.unlink(`./texto-nivel1-${encoding}.txt`, error => {
                    if (error) console.log(error)
                })
            })
        })
}

encryptDocument('base64')
encryptDocument('hex')