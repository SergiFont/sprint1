/*Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, 
a partir del fitxer del nivell 1.*/

import fs from "fs"

const encodeFile = encoding => {
    fs.readFile('./texto-nivel1.txt', 'utf8', (error, data) => {
        if (error) return console.log(error)

        const buffer = Buffer.from(String(data)).toString(encoding)
        fs.writeFile(`./texto-nivel1-${encoding}.txt`, buffer, error => {
            if (error) console.log(error)
        })
    })
}
encodeFile('hex')
encodeFile('base64')

