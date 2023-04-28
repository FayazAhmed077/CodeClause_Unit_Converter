const inputUnit = document.getElementById("inputUnit");
const outputUnit = document.getElementById("outputUnit");
const inputValue = document.getElementById("inputValue");
const outputValue = document.getElementById("outputValue");
const convertBtn = document.getElementById("convertBtn");


const cmToM = 0.01;
const cmToKm = 0.00001;
const mToCm = 100;
const mToKm = 0.001;
const kmToCm = 100000;
const kmToM = 1000;


function convertUnits() {

	const fromUnit = inputUnit.value;
	const toUnit = outputUnit.value;
	const value = inputValue.value;


	let result;
	if (fromUnit === "cm" && toUnit === "m") {
		result = value * cmToM;
	} else if (fromUnit === "cm" && toUnit === "km") {
		result = value * cmToKm;
	} else if (fromUnit === "m" && toUnit === "cm") {
		result = value * mToCm;
	} else if (fromUnit === "m" && toUnit === "km") {
		result = value * mToKm;
	} else if (fromUnit === "km" && toUnit === "cm") {
		result = value * kmToCm;
	} else if (fromUnit === "km" && toUnit === "m") {
		result = value * kmToM;
	} else {
		result = value; 
	}


	outputValue.value = result;
}


convertBtn.addEventListener("click", convertUnits);
