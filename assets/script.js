// Mes variables //
const slides = [ //tableau//
  { //=objets//
   /*clé ou attribut */  image: "/assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "/assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "/assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "/assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

/*     var      =  objet .  fonction     ("chaine de caratere" vise une class) */
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

const bannerImg = document.querySelector(".banner-img");
const textInfo = document.querySelector(".text-info");
const dotsContainer = document.querySelector(".dots");


let slidePosition = 0;



								//ARROW
// Ajout des eventListener //
// eventlistner pour la gauche //
arrowLeft.addEventListener("click", () => {
  slidePosition--; /*decremente*/
  if (slidePosition < 0) {
    slidePosition = slides.length - 1;
  }
  changeSlide();
});

// eventlistner pour la droite
arrowRight.addEventListener("click", () => {
  slidePosition++;/*incremente*/
  if (slidePosition > slides.length - 1) {
    slidePosition = 0;
  }
  changeSlide();
});

function changeSlide() {
  bannerImg.src = slides[slidePosition].image;
  textInfo.innerHTML = slides[slidePosition].tagLine;
  updateDots()
}


									//DOTS
                  


for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i == 0) {
   dot.classList.add("dot_selected")
  }
  dotsContainer.appendChild(dot);
}
const allDots = document.querySelectorAll(".dot");

function updateDots() {
  
  allDots.forEach((dot, index) => {
    if (index === slidePosition) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}