//bonus ver 1: console.log(); in the function
function convertTemp(temp,units) {
	if (units==="C"||units==="c") {
		console.log(temp+" degrees F is "+(temp-32)*(5/9)+" degrees C");
		return (temp-32)*(5/9);
	} else if (units==="F"||units==="f") {
		console.log(temp+" degrees C is "+(temp*(9/5)+32)+" degrees F");
		return temp*(9/5)+32;
	} else {
		console.log("Valid parameters for units are only F or C.");
	}
}

//"or" is used above so that input is not case sensitive

convertTemp(212, "C");
convertTemp(32, "C");
convertTemp(65, "c");
convertTemp(-40, "f");

