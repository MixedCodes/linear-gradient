const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomBtn = document.getElementById("random");

setGradient();

function setGradient() {
	css.textContent = `The gradient is ${color1.value} and ${color2.value}`


} 

function noGenerator() {
	return Math.round(Math.random() * 255);
}

function rgbToHex() { 
  const hex = noGenerator().toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

function randomColorNo() {
	const randomC = "#" + rgbToHex()
				 + rgbToHex()
				 + rgbToHex();
	return randomC;
}

function setGradientRandom() {
	color1.value = randomColorNo();
	color2.value = randomColorNo();
	setGradient()
} 

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", setGradientRandom);
