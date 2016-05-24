
function ready() {
	/* ============== lesson 1 ================== */
	function triangleAreaTwoLegs (a, b) { 
		return (a * b) / 2;
	}

	function triangleAreaLegHypotenuse (a, c) {
		var b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
		return triangleAreaTwoLegs(a, b);
	}

	console.log("S:", triangleAreaTwoLegs(12, 16));
	console.log("S2:", triangleAreaLegHypotenuse(10, 20));
	
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
	}
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
	
	/* ========= lesson 3 =========== */
	
	var global = [10];
	
	function foo(arg) {
		var local = 20;
		console.log("global at foo:", global, "local:", local, "arg:", arg);
	}
	
	function foo1(global) {
		global = global + 1;
		console.log("global at foo1:", global);
		// console.log("local:", local1); error!
	}
	
	foo("fun");
	foo1(global);
	if (global[0] == undefined) {
		console.log("global is not an array");
	} else {
		console.log("global at ready:", global[1]);
	}
	
	console.log("undefined + 1", undefined + 1);
	
	var copyFoo = foo;
	
	copyFoo("double fun");
	
	/* pass a function to other function as argument */
	
	function testString(string) {
		if(string != "") {
			return true;
		} else {
			return false;
		}
	}
	
	console.log(">>", testString("I have an apple and himera"));
	
	
	
	
	/* exercise: function to sum all elements of array */
	
	function arrSum(arr) {
		
		return 0;
	}
	console.log("++++++++++++++++++++++++++++++++++");
	
	var arr = [1,2,3,4,6,10,20,30];
	
	console.log("sum of", arr, "=", arrSum(arr));
}

	