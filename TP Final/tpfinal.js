const enlaces = document.querySelectorAll('nav a')
console.log("Enlaces encontrados: ", enlaces)

for (let i=0; i<enlaces.length; i++){
    enlaces[i].addEventListener('click', function(){
        console.log("Hiciste click en: ", this.textContent)
    })
}