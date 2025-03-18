// Selecionar os elementos dos slides
const slides = document.querySelectorAll(".banner");
//
const dots = document.querySelectorAll(".dot");
// Variavel de controle
let slideindex = 0;
function showSlides(){
    for( let i=0; i < slides.length; i++){
        slides[i].classList.remove("active")
        dots[i].classList.remove("active")
    }

    slideindex++; //Aançando a váriavel 
    if(slideindex > slides.length){
        slideindex=1;
    }

    slides[slideindex - 1].classList.add("active")
    dots[slideindex -1].classList.add("active")

    setTimeout(showSlides, 3000)
    
}

// Inicialização
showSlides()





























































// DOM
// Navegar no documento html Pearson-Hardman
// const brand = document.querySelector("#brand");
// console.log(brand)
// brand.addEventListener('click', function(){
//     // console.log("Testando o Click");
//     console.log(event.target)
//     event.target.style.color ="blue";
// })