let arr = [];
let first = arr[0];
let result = true;
 for (let i = 0; i < arr.length; i++) {
 	if (arr[i] !== first) {
 		result = false;
 			break;
 	}
 }
 console.log(result)