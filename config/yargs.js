//Yargs
const argv = require('yargs')
              .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                desc: 'Base de la tabla'
              })
              .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                desc: 'Listar los números de la tabla'
              })
              .option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                desc: 'Hasta que número quieres la tabla'
              })
              .check( (argv, options) =>{
                  if(isNaN(argv.b)){
                    throw new Error('La base debe ser un numero');
                    }
                    return true;
                })
              .argv;


module.exports = argv;





























