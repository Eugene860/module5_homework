function getRandomInt (min, max) {
	return Math.floor (Math.random() * (max - min)) + min; }
let a = getRandomInt (0, 100);
console.log(a)