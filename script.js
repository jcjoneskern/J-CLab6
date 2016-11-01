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