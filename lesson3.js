
function ready() {
	
	
	
	
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
	
	function condition0(string) {
		return string.search("hi") >= 0;
	}
	
	function condition1(string) {
		return string.search("iso") >= 0;
	}
	
	function testString(string, condition) {
		if(string != "") {
			return condition(string);
		} else {
			return false;
		}
	}
	
	console.log(">>", testString("I have an apple and himera", condition0));
	console.log(">>", testString("I have an apple and isomera", condition1));
	
	var testArray = ["hi", "lowhi", "low", "hilow", "jihi"];
	
	var num = 0;
	testArray.forEach(function(string) {
		num = num + 1;
		console.log("condition0 for", string, "result:", condition0(string), "outside:", num);
	});
	
	console.log("num of elems:", num)
	
	console.log("filtered array:", testArray.filter(condition0));
	
	
	
	/*
	function maker(state) {
		var counter = 1;
		function maked_angry() {
			console.log("i'm a angy function and i'm call", counter, "times");
			counter = counter + 1;
		}
		function maked_calm() {
			console.log("i'm a calm function and i'm call", counter, "times");
			counter = counter + 1;
		}
		if(state == "angry") {
			return maked_angry;
		} else {
			return maked_calm;
		}
		
	}
	*/
	
	/* closure */
	
	function maker(mood) {
		var counter = 1;
		
		return function() {
			console.log("i'm a", mood, "function and i'm call", counter, "times");
			counter = counter + 1;
		};
	}
	
	var maker1 = maker("calm");
	maker1();
	maker1();
	maker1();
	
	var maker2 = maker("angry");
	maker2();
	maker2();
	maker2();
	
	/* exercise: make a list of elements of array */ 
	
	function arrList(arr) {
		function list(numvalue, num) {
			num = num + 1;
			console.log("element", num, "is", numvalue);	
		}
		arr.forEach(list);
	}

	
	/* exercise: function to sum all elements of array (use forEach and closure) */
	
	function arrSum(arr) {
		var sum = 0;
		function countSum(element) {
			sum = sum + element;
		}
		arr.forEach(countSum);
		return sum;
	}
	
	/* exercise: make own implementation of filter (use forEach) */
	
	function myFilter (arr, cond) {
		var filteredArray = [];
		function filtered (element) {
			if (cond(element)) {
				filteredArray.push(element);
			}
		}
		arr.forEach(filtered);
		return filteredArray;
	}
	
	console.log("filtered:", myFilter(testArray, condition0));
	
	/* arr = [14, 20, 31, 44, 34, 56, 46]; */
	arr = [1, 2, 3];
	/* arr = [40, 50]; */
	arrList(arr);
	console.log("++++++++++++++++++++++++++++++++++");
	console.log("sum of", arr, "=", arrSum(arr));
	
	/* exercise: myEvery(array, condition): true if all condition are true, false otherwise */
	
	function myEvery_foreach(arr, condition) {
		var comp = true;
		arr.forEach(function(element) {
			comp = (condition(element) && comp);
		});
		return comp;		
	}
	
	function myEvery_filter(arr, condition) {
		return arr.filter(condition).length == arr.length;
	}
	
	function condition2(element){
		var lowerBound = 30;
		return element > lowerBound;
	}
	
	console.log("every(foreach) return", myEvery_foreach(arr, condition2));
	
	console.log("every(filter) return", myEvery_filter(arr, condition2));
	
	/* exercise: mySome(array, condition): true if at least one condition is true, false otherwise */
	
	function mySome_filter(arr, condition) {
		return arr.filter(condition).length != 0;
	}
	
	console.log("some(filter) return", mySome_filter(arr, condition2));
	
	/* exercise: mySome(array, condition): true if at least one condition is true, false otherwise using forEach */
	
	function mySome_foreach(arr, condition) {
		var comp = false;
		arr.forEach(function(element) {
			comp = (condition(element) || comp);
		});
		return comp;		
	}
	
	console.log("some(foreach) return", mySome_foreach(arr, condition2));
		
}	