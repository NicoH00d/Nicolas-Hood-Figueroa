const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const intro =`
<style>
.intro{
  text-align: justify;
  margin: auto 200px ;
}
.gatoc{
  display: grid;
  place-items: center;
}
</style>
<div class="intro">
<p>
En esta actividad instalaremos y exploraremos Express, un framework de Node.js para hacer desarrollo en el back-end, a traves de una pagina relacionada con la palabra gato...
<br>
</p>
<br>
<div>
El archivo <strong>package.json</strong> es un archivo de configuración fundamental en proyectos de Node.js. Contiene metadatos esenciales sobre el proyecto, como su nombre, versión, descripción y autor. Además, sirve como un registro central de las dependencias del proyecto, tanto las necesarias para la ejecución en producción como las utilizadas durante el desarrollo. Estas dependencias están organizadas en secciones como dependencies y devDependencies, y pueden incluir bibliotecas de terceros, frameworks o herramientas de desarrollo. El archivo package.json también puede incluir scripts personalizados que automatizan tareas comunes, como iniciar la aplicación o ejecutar pruebas. Además, puede contener información sobre la licencia del proyecto, el repositorio, palabras clave y las versiones de Node.js y npm compatibles. En resumen, el package.json es una pieza fundamental en la gestión de proyectos Node.js, proporcionando información esencial para su desarrollo, mantenimiento y distribución.
</div>
<div class ="gatoc"><img src="https://ih1.redbubble.net/image.4717906699.9120/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" width="375" height="500"></div>
</div>
<br>

`
const gato =`
<style>
  table, td {
    border: 3px solid #ccc;
    width: 200px;
    height: 70px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
  }
  /* ----------------- */
  .button {
    background-color: #5cb5c4; /* Verde */
    color: white; /* Texto blanco */
    padding: 10px 20px; /* Espaciado interno */
    font-size: 12px;
    border-radius: 20px; /* Radio de borde */

  }
  .button:hover {
    background-color: #3a8384; /* Verde más oscuro */
  }
  .container {
    margin: 0 200px; /* Establece un margen de 20px a los lados */
    color: aliceblue;
    background: linear-gradient(to right, rgb(255, 0, 200), #4400ff); /* Colores degradados */
    
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  /* Definimos la clase para el fondo degradado */
  .navbar-degradado {
    background: linear-gradient(to right, rgb(0, 255, 234), #0026ff); /* Colores degradados */
  }
  .centrar{
    margin: 0 50px;
    display:grid;
    place-items:center;
  }
  body{
    text-align: justify;
  }
  .coloreartext{
    color: beige;
  }

</style>
<div class="centrar">
  <table id="tablero">
    <tr>
      <td onclick="jugar(this)"></td>
      <td onclick="jugar(this)"></td>
      <td onclick="jugar(this)"></td>
    </tr>
    <tr>
      <td onclick="jugar(this)"></td>
      <td onclick="jugar(this)"></td>
      <td onclick="jugar(this)"></td>
    </tr>
    <tr>
      <td onclick="jugar(this)"></td>
      <td onclick="jugar(this)"></td>
      <td onclick="jugar(this)"></td>
    </tr>
  </table>
  <div id="gameover"></div>
  <hr>
  <button class="button" onclick="resetGame()">Reset Game</button>
</div>
</div>
<hr>
<Script>
  const juegoGato = {
    turno: 'X',
    tablero: Array.from(Array(3), () => Array(3).fill('')),
    jugar: function(celda) {
        const fila = celda.parentNode.rowIndex;
        const columna = celda.cellIndex;

        if (!this.tablero[fila][columna]) {
            celda.innerText = this.turno;
            this.tablero[fila][columna] = this.turno;

            if (this.verificarGanador()) {
                document.getElementById('gameover').innerText = '${this.turno} ha ganado!';
                this.bloquearTablero();
            } else {
                this.turno = (this.turno === 'X') ? 'O' : 'X';
            }
        }
    },
    verificarGanador: function() {
        const t = this.tablero;

        for (let i = 0; i < 3; i++) {
            if (t[i][0] && t[i][0] === t[i][1] && t[i][0] === t[i][2]) return true;
            if (t[0][i] && t[0][i] === t[1][i] && t[0][i] === t[2][i]) return true;
        }

        if (t[0][0] && t[0][0] === t[1][1] && t[0][0] === t[2][2]) return true;
        if (t[0][2] && t[0][2] === t[1][1] && t[0][2] === t[2][0]) return true;

        return false;
    },
    bloquearTablero: function() {
        const celdas = document.querySelectorAll("#tablero td");
        celdas.forEach(celda => celda.onclick = null);
    },
    reiniciarTablero: function() {
        const celdas = document.querySelectorAll("#tablero td");
        celdas.forEach(celda => {
            celda.innerText = '';
            celda.onclick = function() {
                juegoGato.jugar(this);
            };
        });
        this.tablero = Array.from(Array(3), () => Array(3).fill(''));
        document.getElementById('gameover').innerText = '';
        this.turno = 'X';
    }
  };

  function jugar(celda) {
    juegoGato.jugar(celda);
  }

  function resetGame() {
    juegoGato.reiniciarTablero();
  }
</Script>


`;
const html_header =`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>L A B O R A T O R I O  11</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <img src="https://www.onepointesolutions.com/wp-content/uploads/2022/05/5-Types-of-Chemistry.jpg" width="112" height="28">
              </a>
          
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href="/">
                  Home
                </a>
          
                <a class="navbar-item" href="/gato">
                  Juega Gato
                </a>
                <a class="navbar-item" href="/historia">
                Un poco de historia
              </a>
              <a class="navbar-item" href="/nombre">
              Dinos tu nombre
            </a>
            <a class="navbar-item" href="/gatos/sorpresa">
            que es esto?
          </a>
              </div>
            </div>
          </nav>

        <section class="section">
            <div class="container">
`;
const html_footer = `
<footer class="footer">
  <div class="content has-text-centered">
    <p>
    Nico Hood, Construccion de software, Lab 10
    </p>
  </div>
</footer>
`;
const hist_gato = `
<style>
.gatohistory{
  text-align: justify;
  margin: auto 200px ;
}
</style>
<div class="gatohistory">
<h2 class="title">Historia del Juego de Gato</h2>
<p>
El juego del gato, también conocido como "tic-tac-toe" o "tres en línea", es un pasatiempo que ha trascendido fronteras y épocas. Su simplicidad y atractivo universal lo han convertido en uno de los juegos más antiguos y populares del mundo. Aunque su origen exacto es difícil de determinar, las raíces del juego se remontan a civilizaciones antiguas como el Antiguo Egipto y la Antigua Roma, donde versiones tempranas de este juego de estrategia ya se practicaban.
<br>
<br>
Una teoría sugiere que el juego pudo haber surgido en la Roma antigua, donde se jugaba en los suelos utilizando piedras como marcadores. Esta forma rudimentaria de tic-tac-toe proporcionaba entretenimiento simple pero efectivo para las personas de todas las edades. Otra teoría plantea que el juego tuvo sus orígenes en el Antiguo Egipto, donde se practicaba con dibujos en papiro.
<br>
<br>
A lo largo de los siglos, el juego del gato evolucionó y se adaptó a diferentes culturas y períodos históricos. Con el paso del tiempo, se estableció la versión moderna del juego, que se juega en un tablero de 3x3 cuadrículas, con dos jugadores que alternan turnos colocando sus símbolos (generalmente una "X" y una "O") en el tablero vacío. El objetivo del juego es alinear tres de los mismos símbolos de manera horizontal, vertical o diagonal antes que el oponente, o bien llenar todo el tablero sin que se logre una alineación.
<br>
<br>
Aunque la mecánica del juego es simple, su atractivo radica en su capacidad para desafiar las habilidades estratégicas de los jugadores. A medida que se desarrolla una partida, cada movimiento implica una cuidadosa consideración de las posibles consecuencias y la anticipación de las jugadas del oponente. Esta simplicidad estratégica, combinada con la emoción de competir cara a cara, ha mantenido al juego del gato relevante a lo largo de los años, incluso en la era digital.
<br>
<br>
En la actualidad, el juego del gato ha encontrado su lugar tanto en el mundo físico como en el digital. Se puede jugar en tableros de papel, en aplicaciones móviles, en sitios web y en numerosas plataformas de juegos. Su accesibilidad y su capacidad para brindar entretenimiento rápido lo convierten en una opción popular para personas de todas las edades y niveles de habilidad.
<br>
<br>
En conclusión, el juego del gato es mucho más que un simple pasatiempo; es un testamento perdurable a la capacidad de los juegos para trascender el tiempo y conectar a las personas a través de generaciones y culturas. Su historia centenaria nos recuerda que, a veces, la belleza reside en la simplicidad y que incluso el juego más básico puede ofrecer diversión y desafíos sin fin.
<hr>
</div>
</p>
`;

router.get('/', (request, response, next)=> {
  let html =html_header;
  html += `
<h2 class="title">Este es mi laboratorio 11</h2>
  `
  html +=intro;
  html +=html_footer;
  response.send(html);
});

router.get('/gato', (request, response, next)=> {
  let html =html_header;
  html += `
  <h2 class="title" style="color: white; text-align:center;">Juega gato</h2>
  `
  html += gato;
  html +=html_footer;
  response.send(html);
});

router.get('/historia', (request, response, next)=> {
  let html =html_header;
  html += `
  <h2 class="title" style="color: white; text-align:center;">Juega gato</h2>
  `
  html += hist_gato;
  html +=html_footer;
  response.send(html);
});

router.get('/nombre', (request, response, next)=> {
  let html =html_header;
  html += `
  <h2 class="title" style="color: Black;">Dinos tu nombre</h2>
  `
  html +=`
  <form action="/nombre" method="POST">
  <label for="dato">Ingrese un dato:</label>
  <input type="text" id="dato" name="dato">
  <button type="submit">Enviar</button>
</form>
  `;
  html +=html_footer;
  response.send(html);
});

router.post('/nombre', (request, response, next)=> {
  const data = request.body.dato; // Suponiendo que los datos se envían en un campo llamado 'data'

  // Ruta del archivo donde se guardarán los datos
  const filePath = path.join(__dirname, 'datos.txt');

  // Escribir los datos en el archivo
  fs.appendFile(filePath, data + '\n', (err) => {
  });
  response.redirect('/');
});

router.use((request, response, next) => {
  response.status(404);
  let html =html_header;
  html += '<h2 class="title">Por aqui existen juegos de perros...404</h2> <br><p>osea que no se encontró la dirección</p>'
  html += `<img src="https://memeviral.com.mx/wp-content/uploads/2023/10/ayuda1.jpg" width="457" height="535">`

  response.send(html); //Manda la respuesta
});
module.exports = router;