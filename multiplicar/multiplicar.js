const { writeFile } = require('fs')
const colors = require('colors/safe')

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(colors.red(`El valor introducido ${base} no es un número`))
            return
        }

        if (!Number(limite)) {
            reject(colors.red(`El valor introducido ${limite} no es un número`))
            return
        }

        let data = '============='
        data += `Tabla del ${base}`
        data += '============='

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(colors.yellow(`tablas/tabla-${base}.txt`))
        })
    })
}

const listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`)
            return
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`)
            return
        }

        let data = colors.green('=============\n')
        data += colors.green(`Tabla del ${base}\n`)
        data += colors.green('=============\n')

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        resolve(`Tabla del ${base} hasta el límite ${limite}`)

        console.log(data)
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}