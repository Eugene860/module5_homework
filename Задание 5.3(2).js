let x;
let typeX = typeof x;
	switch (typeX) {
		case "number" :
			console.log("x - число");
				break;
		case "string" :
			console.log("x - строка");
				break;
		case "boolean" :
			console.log("x - логический тип");
				break;
		default :
			console.log("тип x не определён");
	}