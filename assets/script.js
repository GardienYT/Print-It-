const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let currentIndex = 0;

const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

slides.forEach((_, index) => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	if (index === currentIndex) dot.classList.add("dot_selected");
	dotsContainer.appendChild(dot);
});

const updateBanner = () => {
	const slide = slides[currentIndex]; 
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	tagLine.innerHTML = slide.tagLine;

	const dots = document.querySelectorAll(".dot");
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	dots[currentIndex].classList.add("dot_selected");
};

leftArrow.addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateBanner();
});

rightArrow.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % slides.length;
	updateBanner();
});