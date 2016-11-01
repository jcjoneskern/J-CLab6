//basic conversion
function convertTemp(temp,units) {
	if (units==="C"||units==="c") {
		return (temp-32)*(5/9);
	} else if (units==="F"||units==="f") {
		return temp*(9/5)+32;
	} else {
		console.log("Valid parameters for units are only F or C.");
	}
}
//"or" is used above so that input is not case sensitive

console.log(convertTemp(212, "c"));
console.log(convertTemp(32, "C"));
console.log(convertTemp(65, "C"));
console.log(convertTemp(-40, "F"));
//proof that the code is able to log all 4 arguments at the same time

//bonus ver 1: console.log() in the function
function convertTemp(temp,units) {
	if (units==="C"||units==="c") {
		console.log(temp+" degrees F is "+(temp-32)*(5/9)+" degrees C");
		return (temp-32)*(5/9);
	} else if (units==="F"||units==="f") {
		console.log(temp+" degrees C is "+(temp*(9/5)+32)+" degrees F");
		return temp*(9/5)+32;
	} else {http://jsbin.com/yofameniqe/edit?js,console
		console.log("Valid parameters for units are only F or C.");
	}
}

convertTemp(212, "C");
convertTemp(32, "C");
convertTemp(65, "c");
convertTemp(-40, "f");

//bonus ver 2: console.log() outside of the function && logs a specific sentence rather than just a number
function convertTemp(temp,units) {
	if (units==="C"||units==="c") {
		return (temp-32)*(5/9);
	} else if (units==="F"||units==="f") {
		return temp*(9/5)+32;
	}
}

function printConvertTemp(temp,units) {
	if (units==="C"||units==="c") {
		console.log(temp+" degrees F is "+convertTemp(temp,units)+" degrees C");
	} else if (units==="F"||units==="f") {
		console.log(temp+" degrees C is "+convertTemp(temp,units)+" degrees F");
	} else {
		console.log("Valid parameters for units are only F or C.");
	}
}

printConvertTemp(212, "C");
printConvertTemp(32, "c");
printConvertTemp(65, "c");
printConvertTemp(-40, "f");