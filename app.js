const { argv } = require('./config/yargs')
const colors = require('colors/safe')

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

const comando = argv._[0]

const { base, limite } = argv

switch (comando) {
    case 'listar':
        listarTabla(base, limite)
            .then(mensaje => console.log(mensaje))
            .catch(e => console.log(e))
        break

    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(colors.blue(`Archivo creado: ${archivo}`)))
            .catch(e => console.log(e))

        break

    default:
        console.log('No se reconoce el comando')
}