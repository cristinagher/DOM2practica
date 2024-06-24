// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
//- Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.
const buttonElement = document.getElementById("button");

const showText = () =>{
    console.log(buttonElement.textContent)
}
buttonElement.addEventListener("click", showText);



//Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const titleElement= document.getElementById("title");

const changeTitle= event => {
    titleElement.textContent="Quita de encima!!";
}

const changeTitle2 = event => {
    titleElement.textContent ="Soy un título"
};


titleElement.addEventListener("mouseover", changeTitle);
titleElement.addEventListener("mouseout", changeTitle2);

//Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.
const showWindowSize = () => {
    console.log(`Ancho: ${window.innerWidth}, Alto: ${window.innerHeight}`);
}

window.addEventListener("resize", showWindowSize);


const paragraphElement = document.getElementById ("paragraph");

const changeParagraph= event => {
    paragraphElement.textContent= event.key;
};

window.addEventListener ("keypress", changeParagraph);

//Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

const sliderTextElement= document.getElementById("subtitle");
const nextButton=document.getElementById("next");
const prevButton=document.getElementById("prev");

const text =["hola", "amiga", "qué", "tal", "estás"];
let slideCounter=0;

//para ver las propiedades
console.dir(nextButton);

const changeSlideText = () => {
    sliderTextElement.textContent = text[slideCounter];
    prevButton.disabled = slideCounter === 0;
    nextButton.disabled = slideCounter === text.length - 1
};
  
const prevSlide = () => {
    if (slideCounter <= 0) {
      slideCounter = text.length - 1;
    } else {
      slideCounter--;
    }
    changeSlideText();
};
  
const nextSlide = () => {
    if (slideCounter >= text.length - 1) {
      slideCounter = 0;
    } else {
      slideCounter++;
    }
    changeSlideText();
};
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);  

const rangeElement=document.getElementById("barrita");

rangeElement.addEventListener("input", () =>{
    console.log(rangeElement.value)
});

const checkboxElement=document.getElementById("cajita");

checkboxElement.addEventListener("input", () => {
    console
})




//Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último

//Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.
//Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cual es su texto.*/