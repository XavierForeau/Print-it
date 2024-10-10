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
];

// Définitions
let slideId = 0;

// Affichage des bullet points
bulletPoints = document.getElementById("bullet-points");
for (let i = 0; i < slides.length; i++) {
	// ajout d'autant de "div" que d'images
	let bullet = document.createElement("div");
	bullet.className = "dot";
	bulletPoints.appendChild(bullet);
	// activation du bullet courant
	selectBullet(0,0);
}

// Listener sur les flèches
document.getElementById("leftArrow").addEventListener("click",()=>{selectSlideShow(-1)});
document.getElementById("rightArrow").addEventListener("click",()=>{selectSlideShow(1)});

// Affichage de l'image demandée du SlideShow, avec le pas de déplacement "nextStep"
function selectSlideShow(nextStep){

	const slideIdOld = slideId;
	const slideMax = slides.length-1;

	// calcul de la nouvelle position
	slideId += nextStep;
	if (slideId > slideMax){
		slideId = 0;
	}else if (slideId < 0) { 
		slideId = slideMax;
	} 
	// activation du bullet, de l'image et du texte
	selectBullet(slideIdOld, slideId);
	replaceImg();
	replaceText();
}

// Activation du bullet courant et désactivation de l'ancien
function selectBullet(oldPos, newPos){
	// lecture de tous les bullets
	let listBullet = document.querySelectorAll(".dots div");
	listBullet[oldPos].classList.remove("dot_selected");
	listBullet[newPos].classList.add("dot_selected");
	console.log("bullet n°",newPos+1);
}
// affichage de l'image
function replaceImg(){

	const slideDir = "./assets/images/slideshow/";
	
	slideImage = slides[slideId].image;
	let image=document.getElementById("image");
	image.src= slideDir+slideImage;
	console.log("image :",slideImage)
}

// affichage du texte
function replaceText(){
	let tagLine = document.querySelector("#banner p");
	tagLine.innerHTML = slides[slideId].tagLine;
	console.log("texte ",slides[slideId].tagLine);
}