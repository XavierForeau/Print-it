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

let slideId = 0;
let slideIdNew = 0;
let slideMax = slides.length-1;
let slideRep = "./assets/images/slideshow/";
let slideImage = ""

function initDots() {
	let dots = document.querySelector(".dots");
	console.log("dots", dots);
	console.log("nb dots", slideMax);
}

function openPrevImg(){
	if (slideId === 0){
		slideIdNew = slideMax;
	}else
	{ 
		slideIdNew = slideId -1;
	}
	console.log("id ", slideId);
	console.log("idNew ", slideIdNew);
	slideId =  slideIdNew;
	slideImage = slides[slideIdNew].image;
	console.log("slide : ",slides[slideIdNew]);

	let image=document.getElementById("image");
	image.src= slideRep+slideImage;

	let tagLine = document.querySelector("#banner p");
	console.log("tagLine", tagLine);

	tagLine.setAttribute("p",slides[slideIdNew].tagLine);
	console.log("new tagLine", tagLine);
}

function openNextImg(){
	if (slideId === slideMax){
		slideIdNew = 0;
	}else
	{ 
		slideIdNew = slideId +1;
	}
	console.log("id ", slideId);
	console.log("idNew ", slideIdNew);
	slideId =  slideIdNew;
	slideImage = slides[slideIdNew].image;
	console.log(slides[slideIdNew]);

	let image=document.getElementById("image");
	image.src= slideRep+slideImage;
}

