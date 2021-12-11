
const {crearTabla} = require('./helpers/operacion');
const argv = require('./config/yargs');
const colors = require('colors');

//Limpiar consola
console.clear();

//Extraer variable de consola
 /*const [, , arg3] = process.argv;
 const [, base] = arg3.split('='); */

//Llamada de función para crear tabla
crearTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(`Archivo creado: ${nombreArchivo}`.green))
    .catch(err =>console.log(err)); 






















































