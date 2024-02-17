
function randnum(){
    // Generar dos números aleatorios entre 1 y 100, mathfloor es para q use numeros enteros
    var num1 = Math.floor(Math.random() * 101);
    var num2 = Math.floor(Math.random() * 101);

    // Calcular la suma de los dos números
    var sumaCorrecta = num1 + num2;

    // Pedir al usuario que ingrese el resultado de la suma
    var startTime = new Date(); // Tiempo de inicio
    var respuestaUsuario = prompt("¿Cuánto es " + num1 + " + " + num2 + "?");

    // Calcular el tiempo que tardó el usuario en responder
    var endTime = new Date(); // Tiempo de finalización
    var tiempoTotal = (endTime - startTime) / 1000; // Tiempo en segundos

    var divRespuesta = document.getElementById("respuesta");
    // Verificar si la respuesta del usuario es correcta
    if (parseInt(respuestaUsuario) === sumaCorrecta) {
        divRespuesta.innerHTML = "¡Respuesta Correcta! <br>";
    } else {
        divRespuesta.innerHTML = "Respuesta Incorrecta. La respuesta correcta era: " + sumaCorrecta + "<br>";
    }

    // Mostrar el tiempo que tardó el usuario en responder
    divRespuesta.innerHTML += "Tiempo de respuesta: " + tiempoTotal + " segundos";
}

function generarTabla() {
    // Pedir al usuario que ingrese un número usando prompt, parseint es para convertir el string a numero
    var numero = parseInt(prompt("Por favor, ingresa un número:"));
    // Verificar si la entrada es un número válido
    if (isNaN(numero)) {
        document.write("¡Por favor, ingresa un número válido!");
    } else {
        
        // Crear la tabla con los números del 1 al 10 y sus cuadrados y cubos
        var table = "<h2>Tabla</h2>";
        table += "<table>";
        table += "<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";
        for (var i = 1; i <= numero; i++) {
            var cuadrado = i * i;
            var cubo = i * i * i;
            table += "<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>";
        }
        table += "</table>";

        // Insertar la tabla generada en el elemento con id "tablaGenerada"
        document.getElementById("tablaGenerada").innerHTML = table;
    }
}
//-----------------------------------------//
function contarNumeros() {
    // Obtener los números ingresados por el usuario desde el campo de entrada
    const numerosInput = document.getElementById("numerosInput").value;

    // Convertir la cadena de números separados por comas en un arreglo de números
    const numeros = numerosInput.split(",").map(numero => parseInt(numero.trim()));

    // Llamar a la función contador con el arreglo de números como parámetro
    const resultado = contador(numeros);

    // Mostrar el resultado en el HTML
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Cantidad de números negativos: ${resultado.negativos}</p>
        <p>Cantidad de ceros: ${resultado.ceros}</p>
        <p>Cantidad de números mayores a cero: ${resultado.mayoresACero}</p>
    `;
}
function contador(numeros) {
    let negativos = 0;
    let ceros = 0;
    let mayoresACero = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            negativos++;
        } else if (numeros[i] === 0) {
            ceros++;
        } else {
            mayoresACero++;
        }
    }

    return {
        negativos: negativos,
        ceros: ceros,
        mayoresACero: mayoresACero
    };
}
//-----------------------------------------//
function crearCamposDeEntrada() {
    // Obtener el número de filas y columnas ingresadas por el usuario
    const filas = parseInt(document.getElementById("filasInput").value);
    const columnas = parseInt(document.getElementById("columnasInput").value);

    // Crear campos de entrada dinámicos para la matriz
    let matrizInputHtml = "";
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            matrizInputHtml += `<input type="number" id="num${i}_${j}" placeholder="Valor ${i + 1},${j + 1}">`;
        }
        matrizInputHtml += "<br>";
    }

    // Mostrar los campos de entrada en el HTML
    document.getElementById("matrizInput").innerHTML = matrizInputHtml;
}

function calcularPromedios() {
    // Obtener los valores ingresados por el usuario y almacenarlos en una matriz
    const filas = parseInt(document.getElementById("filasInput").value);
    const columnas = parseInt(document.getElementById("columnasInput").value);
    let matriz = [];
    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            fila.push(parseInt(document.getElementById(`num${i}_${j}`).value));
        }
        matriz.push(fila);
    }

    // Calcular los promedios de cada fila
    let promedios = [];
    for (let i = 0; i < matriz.length; i++) {
        let suma = matriz[i].reduce((a, b) => a + b, 0); // Sumar todos los elementos de la fila
        let promedio = suma / matriz[i].length; // Calcular el promedio
        promedios.push(promedio); // Agregar el promedio al arreglo de promedios
    }

    // Mostrar los promedios en el HTML
    let resultadoHtml = "<h2>Promedios:</h2>";
    for (let i = 0; i < promedios.length; i++) {
        resultadoHtml += `<p>Promedio de la fila ${i + 1}: ${promedios[i]}</p>`;
    }
    document.getElementById("promedios").innerHTML = resultadoHtml;
}

//-----------------------------------------//
function inverso(numero) {
    let numeroStr = numero.toString();
    let numeroInversoStr = numeroStr.split("").reverse().join("");
    let numeroInverso = parseInt(numeroInversoStr);
    return numeroInverso;
}

function calcularInverso() {
    // Obtener el número ingresado por el usuario desde el campo de entrada
    const numero = parseInt(document.getElementById("numeroInput").value);
    // Calcular el inverso del número utilizando la función inverso
    const inversoNumero = inverso(numero);
    // Mostrar el resultado en el HTML
    document.getElementById("numeroreverso").innerText = `El número inverso es: ${inversoNumero}`;
}
//-----------------------------------------//
//--------Gato-----------------------------//

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
                document.getElementById('gameover').innerText = `${this.turno} ha ganado!`;
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