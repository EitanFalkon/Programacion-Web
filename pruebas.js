function concatenastr (array){
    let total=""
    for (let i=0 ; i< array.length ; i++)
        total+= array[i]+" "
    return total
}
prueba=["Hola", "Como", "estas"]
console.log(concatenastr(prueba))