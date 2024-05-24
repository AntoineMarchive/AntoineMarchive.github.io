// Mes variables //
const slides = [
  {
    image: "/assets/images/slideshow/slide1.jpg",
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

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

const bannerImg = document.querySelector(".banner-img");
const textInfo = document.querySelector(".text-info");

let slidePosition = 0;



								//ARROW
// Ajout des eventListener //
// eventlistner pour la gauche //
arrowLeft.addEventListener("click", () => {
  slidePosition--;
  if (slidePosition < 0) {
    slidePosition = slides.length - 1;
  }
  changeSlide();
  //Vérification//
  console.log("gauche ok");
  console.log(slidePosition);
});

// eventlistner pour la droite
arrowRight.addEventListener("click", () => {
  slidePosition++;
  if (slidePosition > slides.length - 1) {
    slidePosition = 0;
  }
  changeSlide();
  //vérification//
  console.log("droite ok");
  console.log(slidePosition);
});

function changeSlide() {
  bannerImg.src = slides[slidePosition].image;
  textInfo.innerHTML = slides[slidePosition].tagLine;
  selectDot();
}


									//DOTS
                  
const dots = document.querySelector(".dots");

const nombreElements = slides.length;
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
  dot.classiclist.add("dot");
  if (i === slidePosition) {
    dot.classiclist.add("dot_selected");
  } else {

  }
  dots.appendChild(dot);
}

function  selectDot() {
  const dotElements = dots.querySelectorAll("dot");
  dotElements.forEach(dot => {
    dot.classList.remove("dot_selected");
  });
  dotElements[slidePosition].classiclist.add("dot_selected");
}







