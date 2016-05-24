function ready() {
	/* ============== lesson 2 ================== */
	// number and array
	var num = 2 * 10;
	var num2 = 3;
	console.log("very big number:", num);
	
	
	var dailyAmount = [10, 20, 40, 20, 50, 10, 20, 40, 20, 50, 10, 20, 40, 20, 50, 10, 20, 40, 20, 50];
	dailyAmount.push(13);
	dailyAmount.splice(1,1);
	
	var index = 1*7 + 2;
	console.log("array:", dailyAmount, "length", dailyAmount.length);
	console.log("array element:", dailyAmount[index]);

	// string
	var string = "hello, world, wow";
	
	console.log("string:", string, "size:", string.length);
	
	var upperString = string.toUpperCase();
	console.log("upper:", upperString);
	
	console.log("search:", string.split(", "));
	
	console.log("string char:", string[string.length - 1]);
	
	console.log("string char2:", string.search("l") - 1);
	
	console.log("string slice:", string.slice(1,3) + 2 + "!" + true); // string + number: concatenate string and (number->string)
	
	// boolean
	var a = [true,true,false,false];
	var b = [true, false, true, false];
	
	console.log("boolean:", b, ". boolean + number", b + 1); // boolean + number: (true:1, false:0) + number
	
	console.log("and:", a[0] && b[0], a[1] && b[1], a[2] && b[2], a[3] && b[3]);
	console.log("or:", a[0] || b[0], a[1] || b[1], a[2] || b[2], a[3] || b[3]);
	console.log("not:", !b[0], !b[1]);
	
	if (num2 < 2) {
		console.log("condition done");
	} else {
		console.log("condition fail");
	}
	
	/* exercise: find all substring in string and return array of index */
	function _findAll (res, string, substring) {
		var findPosition = string.search(substring);
		
		if (findPosition < 0) {
			return res;
		} else {
			if (res.length == 0) {
				var offset = 0;
			} else {
				var offset = res[res.length - 1] + substring.length;	
			}
			res.push(findPosition + offset);
			var stringTail = string.slice(findPosition + substring.length, string.length);
			return _findAll(res, stringTail, substring);
		}
	}
	
	function findAll (string, substring) {
		return _findAll([], string, substring);
	}
	
	
	// test case
	var testString = "la mama myla rama sjwejp okpdkld,l maklfwpeorkokdflmalkrwepro[poxp pfl;erl masl[wer[pdfpls;dl';ew...,vlp[wp mapl[fwppl[l4[plsdplf";
	// var testString = "mamamamam";
	var testSubstring = "ma";
	
	console.log("string:", testString, ", sub:", testSubstring, ", result:", findAll(testString, testSubstring));
	
	
	/* exercise: factorial(x) = 1 * 2 * 3 * ... * x, factorial(bool, string, etc.) = NaN */
	
	/*
	function factorial (x) {
		var fac0 = 1;
		function newFactor () {
			return fac0 * 1;
		}
		if (x > 0) {
			newFactor() *
			
			
		}		
		return 0;
	}use forEach 
	*/
	
	function factorial (x) {
		console.log("need to calculate factorial of", x);
		if(x == 0) {
			console.log("i know result, it's 1!");
			return 1;
		} else {
			console.log("i need to calculate it as multiply", x, "and factorial of", x - 1);
			var fac = factorial(x - 1);
			console.log("i get value factorial of", x - 1, "and it is", fac, "!");
			console.log("now i can calculate factorial of", x, ":", fac, "*", x);
			var res = x * fac;
			console.log("result is", res);
			return res;
		}
	}
	
	console.log("++++++++++++++++++++++++++++++++++");
	var x;
	x = 5;
	
	console.log("factorial of", x, "=", factorial(x));
	
	/* exercise: function to sum all elements of array */
	
	function arrSum(arr) {
		function summarize(arr, sum) {
			if (arr.length != 0) {
				sum += arr[0]; // eq sum = sum + arr[0];
				arr.splice (0,1);
				return summarize(arr, sum);
			} else {
				return sum;
			}
		}
		return summarize(arr.slice(), 0);
	}
	console.log("++++++++++++++++++++++++++++++++++");
	
	// var arr = [6, 2, 3, 4, -1];
	var arr = [];
	
	console.log("sum of", arr, "=", arrSum(arr));
	
	/* exercise: myEvery(array, condition): true if all condition are true, false otherwise, using recursion */
	
	function myEvery(arr, condition) {
		function every(arr, condition){
			if (arr.length == 0) {
				return true;
			}
			if (condition(arr[0])) {
				arr.splice (0, 1);
				return every(arr, condition);
			} else {
				return false;
			}
		}
		
		if (arr.length == 0){
			return undefined;
		} else {
			return every(arr, condition);
		}
	}
	
	function condition2(element){
		var lowerBound = 1;
		return element > lowerBound;
	}
	
	console.log("myEvery result is", myEvery(arr, condition2));
}