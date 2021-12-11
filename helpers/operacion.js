const fs = require('fs');
const colors = require('colors');

const crearTabla = async (base  = 5, listar = false, hasta =11) =>{
    
    try {
        let salida = '';
        let consola = '';

        for (let i = 0; i <= hasta; i++) {
        salida +=`${base} x ${i} = ${base * i}\n`;
        consola +=`${base} ${'x'.blue} ${i} ${'='.blue} ${base * i}\n`;
        }

        if(listar){
            console.log('============================================'.red);
            console.log('==========Tabla de Multiplicar=============='.red);
            console.log('============================================'.red);
         }

        if(listar){
           console.log(consola);
        }

        fs.writeFile(`./out/tabla_${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log(`El archivo tabla_${base}.txt ha sido creado`);
            });

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error
    }
} 

//Exportar funcion
module.exports = {
    crearTabla
}






















