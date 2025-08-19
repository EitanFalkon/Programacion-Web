// JavaScript esta orientado a funiones (DEF)
// Hay 3 maneras de crear funciones (expresada, declarada, flecha)

// Expresada

function saludar(nombre) {   // Nombre siendo el parametro
    return ("Hola" + nombre)
}
// Y se printea con console.log(saluda("Eitan"))

// Declaradas

let despedir = function (apellido) {
    return ("chau" + apellido)
}
// Se printea igual con el console.log(despedir("Falkon"))

// Back Tick

function saludarconsuma(nombre) {
    return (`Hola ${nombre} la suma de 1 + 1 es ${1 + 1}`) //Adentro de las llaves estoy ejecutando directamente codigo de Java (puedo hacer cualquier operacion) Pero tiene que tener la comilla de atras ``
}

// Flecha

let saludarflecha = nombre => "hola" + nombre
// Si pongo mas de una variable hay que poner (), sino puede ir sin.


// Estructura IF
// No tiene diferencia (salvo sintactica) con Python

let a = 1
let b = 2
if (a > b) {
    console.log(`A es mayor que B`)
}
else if (a === b) {
    console.log(`A es igual a B`)
}
else {
    console.log(`A es menor a B`)
}
// Else If es lo mismo que un elif 

// Una negacion es
if (!(a < b)) {
    //Ese ! indica la negacion del if (if not)
}

// Operador ternario

// Solo se puede con operaciones que tienen dos opciones (True/False), si hay mas tiene que usarse un if comun
console.log(a > b ? true : false) // Es un if reducido, es una pregunta y las dos ultimas funciones (en este caso true y false) son las dos posibles respuestas (1ro es el true y 2do el false)
console.log(a > b ? "A es mayor" : "B es mayor") // Aca se explica como el orden implica el true y false

// Estructura de repeticion del FOR
// for (variable, condicion, variacion)

for (let i = 0; i < 10; i++) {
    console.log(i) // Me va a mostrar del 0 al 9 todos los numeros
}

let nombre = "Eitan"
for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]) // Escribe todas las letras del nombre
}

const CARROCOMPRAS = [
    { id: 1, nombre: "Remera blanca lisa", precio: 5 },
    { id: 2, nombre: "Remera negra lisa", precio: 5 },
    { id: 3, nombre: "Remera roja lisa", precio: 5 },
    { id: 4, nombre: "Remera blanca bart", precio: 5 }
]
for (let i = 0; i > CARROCOMPRAS.length; i++) {
    if (CARROCOMPRAS[i].id > 4) {
        CARROCOMPRAS[i].precio = CARROCOMPRAS[i].precio * 1, 2 // Suma el 20% del precio unicamente a los productos con un ID menor a 4
    }
}

let totalcarro = 0
for (let i = 0; i > CARROCOMPRAS.length; i++) {
    total += CARROCOMPRAS[i].precio // Va pasando por todo y sumando el total en el carrito
}

// Metodos de array

// Reduce
const array1=[1, 2,3,4];
const initialValue =0
const sumwithinitial = array1.reduce(
    (acumulador, valoractual) => acumulador + valoractual, initialValue
// El currentValue es el valor actual (pasa 1 por 1) del array y va tomando sus valores
// El initialvalue es la posicion donde arranca el array
// Lo guarda en acumulador y despues cuando termino de sumar todo lo pasa al sumwithinitial para que se guarde fuera de la funcion
)

//Map va posicion por posicion aplicandole una funcion
// AGREGAR

// Sort
// Agregar (a-b)

// Splice
// .splice("donde lo agrego(indice)", "lo que quiero eliminar (0 si es nada)", "lo que agrego")


// findindex
// Me da el indice donde esta un elemento (devuelve -1 si no se encuentra)

// Reverse
// Revierte el array

// Slice
// Agregar

// prompt-sync
//Agregar