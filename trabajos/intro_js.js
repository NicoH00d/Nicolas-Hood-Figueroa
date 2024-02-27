//consola (log)

console.log("hola"); //para iimprimir
console.info("clash of clans");
console.warn("Esta es una advertencia");
console.error("esto es un error");
console.assert(1==1);//si es verdadero el acierto entonces no hace nada
console.assert(1==="1")//en js existe el triple igual q requiere que los valores sean estrictamente iguales

//variabes, constantes

//manera antigua de declarar variables
    var luchadores = 12;
    //esta vivira en toda la funcion o donde se declare

//declarar variables de manera moderna
    let arqueras = 20;
    //esta es mas segura por que vive dentro de las llaves donde fue declarada

    const precio =50; //no se pueden modificar

//alert, prompt, confirm

alert("hola");//aparece una alerta en la pagina
const nombre = prompt("como te llamas?");//prompt es la entrada
console.log("hola"+nombre);

const hambre = confirm("tienes hambre?");
if(hambre){
    console.log("come algo");
} else {console.log("ok");}

//funciones

function atacar(){
    console.log("ataca");
}
atacar();

let accion =()=>{
    console.log("construir");
} //una variable que apunta a una funcion

accion();

//arreglos
const arreglo = ["elemento"]; // a pesar de ser CONST, 
//se puede modificar agregando elementos al arreglo debido a que el elemento tiene una localidad de memoria fija
//o
const arreglo2 = new Array();

arreglo.push("otro elemento");
console.log(arreglo);

arreglo[10] = "uno mas"; //js llena de espacios vacios hasta el numero que quieres q haya el nuevo elemento
console.log(arreglo);
arreglo["dos"] = 2; //crea una localidad llamada "dos" y le asigna un 2

//recorridos alternativos
for(let valor of arreglo){
    console.log(valor);
}//elementos del arreglop
for(let indice in arreglo){
    console.log(indice);
}//indices en el arreglo

//objetos

const objeto = {atributo1: "valor 1", atrubito2: "valor 2"};
objeto.atributo3 = 2;
console.log(objeto);

//modificar html
document.write("hola");