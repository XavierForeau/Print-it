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

// Définitions
let slideId = 0;
let slideIdNew = 0;
let slideMax = slides.length-1;
slideRep = "./assets/images/slideshow/";
slideImage = ""

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

// Activation du bullet courant et désactivation de l'ancien
function selectBullet(oldPos, newPos){
	// lecture de tous les bullets
	let listBullet = document.querySelectorAll(".dots div");
	listBullet[oldPos].classList.remove("dot_selected");
	listBullet[newPos].classList.add("dot_selected");
	console.log("bullet n°",newPos+1);
}

// Affichage de l'image demandée, avec le pas de déplacement "step"
function selectImg(step){

	// calcul de la nouvelle position
	slideIdNew = slideId + step;
	if (slideIdNew > slideMax){
		slideIdNew = 0;
	}else if (slideIdNew < 0) { 
		slideIdNew = slideMax;
	} 

	// activation du bullet, de l'image et du texte
	selectBullet(slideId, slideIdNew);
	replaceImg();
	replaceText();
	slideId =  slideIdNew;
}

// affichage de l'image
function replaceImg(){
	slideImage = slides[slideIdNew].image;
	let image=document.getElementById("image");
	image.src= slideRep+slideImage;
	console.log("image :",slideImage)
}

// affichage du texte
function replaceText(){
	let tagLine = document.querySelector("#banner p");
	tagLine.innerHTML = slides[slideIdNew].tagLine;
	console.log("texte ",slides[slideIdNew].tagLine);
}
