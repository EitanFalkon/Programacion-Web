// EJ 2
let var1=2
let var2=5
let var3=7

promedio= (var1+var2+var3)/3
resto=(var1+var2+var3)%3

console.log(promedio, resto)

// Ej 3
// Declara una variable para almacenar un objeto que represente un coche con propiedades como marca, modelo y año. Imprime el tipo de cada propiedad con typeof.

let auto ={
    marca:"Mercedes-Benz", 
    modelo: "G-Wagon",
    ano : 2020,
}
console.log(typeof(auto.marca), typeof(auto.modelo))

// Ej 4
// Crea un array con los nombres de 5 ciudades que te gustaría visitar. Reemplaza el tercer elemento por otra ciudad y luego imprime el array actualizado.

let cuidades=["Tokyo", "Londres", "Seoul", "San Fransisco", "Berlin"]
cuidades[3]="Bangkok"
console.log(cuidades)

// Ej 5
// Crea un array de 3 objetos que representen películas, cada una con título, director y año de lanzamiento. Imprime el director de la última película.

let peli1 = {
    director : "Christopher Nolan",
    anio : 2021,
    nombre : "Batman:the Dark Night Rises"
}

let peli2 = {
    director : "Louis Letterier",
    nombre : "Now You See Me",
    anio : "2013"
}

let peli3 = {
    nombre :"Inception",
    director :"Christopher Nolan",
    anio: 2010
}

const peliculas =[peli1, peli2, peli3]
console.log(peliculas[2].director)

// Ej 6
// Declara tres variables booleanas y usa operadores lógicos para verificar si al menos dos son verdaderas. Imprime true o false en la consola dependiendo del resultado.

let vari1 = true
let vari2 =false
let vari3= true

if ((vari1==true && vari2==true) || (vari1==true && vari3==true) || (vari2==true && vari3==true)){
console.log(true)
}

// Ej 7
// Declara tres variables numéricas. Compara si el primer número es mayor que el segundo y menor que el tercero. Luego, verifica si el segundo número es distinto al tercero. Imprime los resultados de las comparaciones.
let num1=6
let num2=3
let num3=10

if (num1>num2){
    console.log(true)
} else {
    console.log(false)
}
if(num2!=num3){
    console.log(true)
} else {
    console.log(false)
}

// Ej 8
// Declara dos variables que almacenen strings (por ejemplo, tu nombre y tu apellido). Luego, crea una tercera variable que concatene las dos primeras y muestra el resultado en la consola.

nombr="Eitan"
ape="Falkon"
todo=nom+ape
console.log(todo)

// Ej 9
// Declara una variable numérica y utiliza los operadores de incremento (++) y decremento (--) para modificar su valor. Imprime el valor de la variable después de cada operación
let numero=5
numero--
console.log(numero)
numero++
numero++
console.log(numero)

// Ej 10
// Crea un objeto que represente un estudiante con propiedades como nombre, edad y carrera. Accede e imprime cada propiedad del objeto.

let estudiante={
    nombre:"Eitan",
    carrera:"Negocios",
    edad:20
}
console.log(estudiante.nombre)
console.log(estudiante.edad)
console.log(estudiante.carrera)

// Ej 11
// Crea un array que contenga dos arrays internos, cada uno con 3 números. Accede al segundo elemento del primer array interno.
let masterarray =[
    [1,20,3],
    [5,6,2]
]
console.log(masterarray[0][1])

// Ej 12
// Declara dos variables numéricas y utiliza los operadores >, <, >=, <=, ===, !== para comparar sus valores. Imprime el resultado de cada comparación.
let variable1="12"
let variable2=12
if(variable1===variable2){
    console.log(true)
} else{
    console.log(false)
}
if (variable1==variable2){
    console.log(true)
} else{
    console.log(false
    )
}

// Ej 13
// Declara una variable sin asignarle un valor y otra variable con valor null. Utiliza typeof para imprimir el tipo de cada variable.
let variable
let hola123=null
console.log(typeof(variable))
console.log(typeof(hola123)) // No deja (por bug) que null sea null

// Ej 14
// Declara una variable que almacene un número como string (por ejemplo, "123"). Convierte este string a un número usando parseInt o Number y demuestra que ahora puedes realizar operaciones matemáticas con él.
let numerostr="10"
parseInt(numerostr)
numerostr=numerostr-1
console.log(numerostr)
