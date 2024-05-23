const slides = [
	{
		"image":"/assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"/assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"/assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"/assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// ajout des Event Listeners sur les flèches//
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

const bannerImg = document.querySelector(".banner-img");
const textInfo = document.querySelector (".text-info");
const dots = document.querySelector (".dots");

let slidePosition = 0;



// eventlistner pour la gauche qui fait appelle à la fonction changeDirection et en lui injectant le parametre "left"
	arrowLeft.addEventListener("click", () => {
	slidePosition --;
	if (slidePosition <0) {
		slidePosition = slides.length-1;
	}
	changeSlide();
	console.log("gauche ok") 
	console.log(slidePosition)
  });

  // eventlistner pour la droite qui fait appelle à la fonction changeDirection et en lui injectant un parametre autre que 'left'
  	arrowRight.addEventListener("click", () => {
	slidePosition ++;
	if (slidePosition > slides.length-1) {
		slidePosition = 0;
	}
	changeSlide();
	console.log("droite ok") 
	console.log(slidePosition)
  });

  function changeSlide () {
	bannerImg.src = slides[slidePosition].image;
	textInfo.innerHTML = slides[slidePosition].tagLine;
  }