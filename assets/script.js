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

// Slideshow: PREVIEW
const banner = document.getElementById("banner");
let view = 0;

const slide = document.createElement("img");
slide.classList.add("banner-img");
slide.src = `assets/images/slideshow/${slides[view].image}`;
banner.appendChild(slide);
const bannerTitle = document.createElement("p");
bannerTitle.innerHTML = slides[view].tagLine;
banner.appendChild(bannerTitle);

// Slideshow: DOTS
const dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot")
	dot.classList.add(`dot${i}`)
	dots.appendChild(dot)
}

let dotSelected = document.querySelector(`.dot${view}`);
dotSelected.classList.add("dot_selected");

// Slideshow: ARROWS
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

function arrowClick(direction) {
	dotSelected.classList.remove(`dot_selected`);
	switch (direction) {
		case "left":
			view--;
			if (view < 0) {
				view = slides.length - 1;
			}
			break;
		case "right":
			view++;
			if (view > slides.length - 1) {
				view = 0;
			}
			break;
		}

	slide.src = `assets/images/slideshow/${slides[view].image}`;
	bannerTitle.innerHTML = slides[view].tagLine;
	dotSelected = document.querySelector(`.dot${view}`);
	dotSelected.classList.add("dot_selected");
}

arrowLeft.addEventListener("click", () => {
	arrowClick("left");
});
arrowRight.addEventListener("click", () => {
	arrowClick("right");
});

// Slideshow: DOTS click - BONUS
function dotClick(selected) {
	dotSelected.classList.remove(`dot_selected`);
	slide.src = `assets/images/slideshow/${slides[selected].image}`;
	bannerTitle.innerHTML = slides[selected].tagLine;
	dotSelected = document.querySelector(`.dot${selected}`);
	dotSelected.classList.add("dot_selected");
	view = selected;
}

for (let i = 0; i < slides.length ; i++) {
	let dot = document.querySelector(`.dot${i}`)
	dot.addEventListener("click", () => {
		dotClick(i);
	});
}
