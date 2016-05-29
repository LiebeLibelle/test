/*
var someArr = [1, 2, "hi", 14, undefined];

console.log(
	"numbers only:", 
	someArr.filter(
		function(element){
			return typeof(element) == "number";
		}
	)
);
*/
/*
var sieveArr = Array(sieveArrMax - sieveArrMin).fill(undefined).map(function(item, idx) {
	return idx + newArrMin;
});
*/
	
/*

*/


/* ========== найти все простые числа до 10000 решетом эратосфена ============= */
function ready() {
	
	var sieveArrMax = 10000;
	var testSimpleNumbers = "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47".split(" ").map(function(item) {
		return parseInt(item, 10);
	});
	
	// Выписать подряд все целые числа от двух до sieveArrMax (2, 3, 4, …, sieveArrMax)
	var sieveArr = [];
	for(var i = 0; i <= sieveArrMax; i++) {
		sieveArr.push(i);
	}
	sieveArr[0] = undefined;
	sieveArr[1] = undefined;
	
	console.log("original sieve:", sieveArr);
	console.log("testSimpleNumbers:", testSimpleNumbers);
	
	
	// переменная p изначально равна двум — первому простому числу.
	var p = 2;
	
	// Повторять шаги, пока возможно:
	while(p != undefined) {
		// Зачеркнуть в списке числа от 2p до n считая шагами по p (это будут числа кратные p: 2p, 3p, 4p, …).		
		for(var i = 2 * p; i <= sieveArrMax; i += p) {
			sieveArr[i] = undefined;
		}
		// console.log(sieveArr);
		// Найти первое незачёркнутое число в списке, большее чем p, и присвоить значению переменной p это число.
		p = sieveArr.filter(function(item) {return item != undefined && item > p;})[0];
	}
	
	console.log("total sieve:", sieveArr.filter(function(item) {return item != undefined;}));
	
}