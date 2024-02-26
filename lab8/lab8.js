//Una función que reciba un arreglo de números y devuelva su promedio.

function calcularPromedio(numeros) {
    // Verificar si el arreglo está vacío
    if (numeros.length === 0) {
        return 0; // Devolver 0 si el arreglo está vacío para evitar divisiones por cero
    }

    // Sumar todos los números en el arreglo
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    
    // Calcular el promedio dividiendo la suma entre la cantidad de elementos
    const promedio = suma / numeros.length;

    return promedio;
}

// Ejemplo de uso
const arregloNumeros = [10, 20, 30, 40, 50];
const promedio = calcularPromedio(arregloNumeros);
console.log("El promedio de los números es:", promedio);

//Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.   
const filesystem = require('fs');

function archivotexto (){
    filesystem.writeFileSync("lab8.txt",'Hola, este es el laboratorio 8');
}
archivotexto();

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Construir la ruta del archivo solicitado concatenando un punto con la URL de la solicitud
    let filePath = '.' + req.url;

    // Verificar si la ruta es solo la raíz del servidor
    if (filePath === './') {
        filePath = './frameworks.html'; // Por ejemplo, servir frameworks.html por defecto si la ruta es solo la raíz
    }

    // Obtener la extensión del archivo solicitado
    const extname = String(path.extname(filePath)).toLowerCase();

    // Definir el tipo de contenido según la extensión del archivo
    const contentType = {
        '.html': 'text/html',
        '.js': 'text/javascript', // Agregar soporte para archivos JavaScript
        '.css': 'text/css',
        // Añadir otros tipos de contenido según sea necesario
    };

    // Obtener el tipo de contenido del objeto contentType o establecer 'application/octet-stream' como tipo de contenido por defecto
    const contentTypeHeader = contentType[extname] || 'application/octet-stream';

    // Leer el contenido del archivo solicitado
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // Si el archivo no se encuentra, enviar un 404
                fs.readFile('./404.html', (err, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');
                });
            } else {
                // Si hay un error diferente, enviar un 500
                res.writeHead(500);
                res.end('Error interno del servidor: ' + err.code);
                res.end();
            }
        } else {
            // Si no hay errores, enviar el contenido del archivo con el tipo de contenido correspondiente
            res.writeHead(200, { 'Content-Type': contentTypeHeader });
            res.end(content, 'utf-8');
        }
    });
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

//preguntar como agregar una hoja de estilos, o por que no funciona

