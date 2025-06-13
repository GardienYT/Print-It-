const slides = [
	{
		"image":"slide1.jpg", // Index 0
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg", // Index 1
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg", // Index 2
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png", // Index 3
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let currentIndex = 0; // Image actuelle

// Récup les élèments nécessaire
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

// Boucle pour les dots
slides.forEach((_, index) => {
	const dot = document.createElement("div"); 						// Crée une <div> pour le point
	dot.classList.add("dot"); 										// Ajoute la classe "dot"
	if (index === currentIndex) dot.classList.add("dot_selected"); 	// Vérif la dot
	dotsContainer.appendChild(dot); 								// Puis l'ajoute
});

// Fonction pour mettre à jour les images, textes et dots
const updateBanner = () => {

	// Mise à jour des ima
	const slide = slides[currentIndex]; 							// Récup l'images actuelles
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;	 	// Change l'image actuelle
	tagLine.innerHTML = slide.tagLine; 								// Change aussi le texte affiché

	// Mise à jour des dots
	const dots = document.querySelectorAll(".dot");					// Récup les dots
	dots.forEach(dot => dot.classList.remove("dot_selected")); 		// Supprime la selection aux dots
	dots[currentIndex].classList.add("dot_selected");				// Puis on selectione le bon point
};

// Clque sur la flèche Gauche
leftArrow.addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateBanner();
});

// Clique sur la flèche Droite
rightArrow.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % slides.length;
	updateBanner();
});