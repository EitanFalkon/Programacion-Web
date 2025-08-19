// Ej 1
// Escribe una función que tome tres números como argumentos y retorne el mayor de ellos. Llama a la función con diferentes valores e imprime el resultado.

function encontrarmayor(num1, num2, num3){
    if (num1>=num2 && num1>=num3){
        return num1
    } else if (num2>=num1 && num2>=num3){
        return num2
    } else {
        return num3
    }
}

console.log(encontrarmayor(10,6,11))
console.log(encontrarmayor(1210,1,3))

// Ej 2
// Crea una función expresada que reciba un array de strings y retorne un string que concatena todos los elementos del array separados por espacios.
function concatenastr (array){
    let total=""
    for (let i=0 ; i< array.length ; i++)
        total+= array[i]+" "
    return total
}
prueba=["Hola", "Como", "estas"]
console.log(concatenastr(prueba))

// Ej 3
// Convierte la función del ejercicio anterior a una función de flecha. Además, agrega una validación para que, si el array está vacío, retorna un mensaje de advertencia.

const concantenarflecha = (array) =>{
    if (array.length===0){
        return "Advertencia, array vacio!"
    }
    let total=""
    for (let i=0 ; i< array.length ; i++)
        total+= array[i]+" "
    return total    
}

// Ej 4
//Escribe una función que tome una temperatura en grados Celsius como argumento y devuelva un mensaje que indique si hace frío (menor a 15 grados), templado (entre 15 y 25 grados) o calor (mayor a 25 grados).

function analizartemp (grados){
    if (grados< 15){
        return "Frio"
    } else if (grados>=15 && grados<=25) {
        return "Templado"
    } else {
        return "Calor"
    }
}

// Ej 5
//Reescribe una función que tome una hora (formato 24 horas) y devuelva "Buenos días" si es antes de las 12, "Buenas tardes" si es entre las 12 y 18, o "Buenas noches" si es después de las 18, utilizando operadores ternarios.

function decirdia (hora){
    return hora<12 ? "Buenos dias": hora <=18 ? "Buenas tardes":"Buenas noches"
}

// Ej 6
// Escribe una función que reciba cuatro argumentos booleanos y retorne true si al menos uno de los dos primeros es verdadero y al menos uno de los dos últimos es falso.

function verbooleanos (var1, var2, var3, var4){
    if ((var1==true || var2==true) && (var3==false || var4==false)){
        return true
    } else {
        return false
    }
}

// Ej 7
// Escribe una función que tome un número como argumento y retorne su factorial. Utiliza una estructura if para manejar el caso base.

function factoriales (numero){
    if (numero==0){
        return 1
    }
    let total=1
    for (let i=numero; i> 0; i--){
        total=total*i
    }
    return total
}

// Ej 8
// Crea una función que salude a una persona. Si no se proporciona el nombre, debe saludar con "Hola, invitado".

function saludo (nombre){
    if (nombre==undefined){
        return `Hola, invitado.`
    } else {
        return `Hola, ${nombre}.`
    }
}

// Ej 9
// Escribe una función que tome un número y retorne true si es par o false si es impar. Utiliza el operador módulo (%) y un operador ternario.

function pares (numero){
    return numero%2 == 0 ? true:false
}

// Ej 10
// Escribe una función que reciba un día de la semana (en número) y retorne el nombre del día. Usa una estructura switch.

function diaSemana (dianum){
    switch (dianum){
        case 1:
            return "Lunes"
        case 2:
            return "Martes"
        case 3:
            return "Miercoles"
        case 4:
            return "Jueves"
        case 5:
            return "Viernes"
        case 6:
            return "Sabado"
        case 7:
            return "Domingo"
        default:
            return "Numero invalido"
    }
}

// Ej 11
// Crea una función recursiva que calcule la suma de los números de 1 hasta n.

function calculasuman (n){
    if (n==1){
        return 1
    } else {
        return n + calculasuman(n-1)
    }
}

// Ej 12
// Escribe una función que verifique si una contraseña cumple con ciertos criterios: al menos 8 caracteres, contiene un número y una letra mayúscula. Utiliza operadores lógicos para combinar las condiciones.

function verificarcontrasena (contra){
    let validolen=false
    let validoletras=false
    let validonumero=false
    if (contra.length>=8){
        validolen=true
    }
    for (let i=0; i< contra.length; i++){
        if ("A"<=contra[i] && contra[i]<="Z"){
            validoletras=true
        }
        if ("0"<=contra[i] && contra[i]<="9"){
            validonumero=true
        }
    }
    if (validolen==true && validoletras==true && validonumero==true){
        return true
    } else{
        return false
    }
}