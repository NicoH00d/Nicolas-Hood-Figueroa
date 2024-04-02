
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
                document.getElementById('gameover').innerText =`${this.turno} ha ganado!`;
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
function toggleDiv() {
    var div = document.getElementById('miDiv');
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
}