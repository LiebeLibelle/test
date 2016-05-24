// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

function ready() {
	
	for(var i = 1; i < 4100; i = i * 2) {
		console.log(i);
	}
	
	var i = 1;
	while(i < 4100) {
		console.log(i);
		i *= 2; // i = i * 2 
	}
	
	
	
	/* forEach <- for */
		
	arr = [14, 20, 31, 44, 34, 56, 46];
	
	console.log("+++++++++++++++++++++");
	
	function myForEach_byfor_2x(arr, callback) {
		for(var i = 0; i < arr.length; i += 0.5) {
			callback(arr[Math.floor(i)], i, arr);
		}
	}
		myForEach_byfor_2x(arr, function (item) {
		console.log("+", item);
	});
	
	
	/* =============== Сортировка ================= */
	/* сделать тестовый массив из 100 элементов, заполненных случайными числами, 
	использовать Array.prototype.sort, сравнить массивы, отсортированные стандартным алгоритмом и твоим и убедиться в правильности работы */
	/* проверить работу на пустом массиве, и из 1, 2, 3 элементов */
	
	/* Алгоритм состоит из повторяющихся проходов по сортируемому массиву. За каждый проход элементы последовательно сравниваются попарно и, 
	если порядок в паре неверный, выполняется обмен элементов. Проходы по массиву повторяются N-1 раз или до тех пор, пока на очередном проходе 
	не окажется, что обмены больше не нужны, что означает — массив отсортирован. При каждом проходе алгоритма по внутреннему циклу, очередной
	наибольший элемент массива ставится на своё место в конце массива рядом с предыдущим «наибольшим элементом», а наименьший элемент перемещается
	на одну позицию к началу массива («всплывает» до нужной позиции, как пузырёк в воде, отсюда и название алгоритма). */
	
	var testArrLenght = 100;
	
	var testArrMin = 0;
	var testArrMax = 500;
	
	
	var testArr = Array(testArrLenght).fill(undefined).map(function(item) {
		
		return Math.round(Math.random() * (testArrMax - testArrMin) + testArrMin);
	});
	
	//i = index
	
	/* function bubbleSort(arr, callback) {
		for(var i = 0; i < arr.length; i ++) {
			callback()
			if(arr[i] < arr[i ++]) {
				var a = arr[i];
				arr[i] = arr[i ++];
				arr[i ++] = a;
		} 
	} */ 
	
	function bubbleSort(arr) {
		var swapCount = undefined;
		while (swapCount != 0) {
			swapCount = 0;
			arr.forEach(function(item, idx, arr) {
				if(arr[idx] > arr[idx + 1]) { // TODO check index bound
					var a = arr[idx];
					arr[idx] = arr[idx + 1];
					arr[idx + 1] = a;
					swapCount++;
				}
			});
			// console.log("iteration, count:", swapCount);
		}
		return arr;
	}
	
	

	console.log("array to sort:", testArr);
	
	var jsSortArr = testArr.slice().sort(function (a, b) { return a - b });
	var bubbleSortArr = bubbleSort(testArr.slice());
	
	console.log("js sort:", jsSortArr);
	
	console.log("bubble sort:", bubbleSortArr);
	
	console.log("bubble sort result:", jsSortArr.equals(bubbleSortArr));
	
	
	/* сортировка поиском минимального элемента */
	
	function selectionSort(arr) {
		var sortedArr = [];
		while(arr.lenght != 0) {
			function findMinIdx(arr) {
				var minIdx = 0;
				arr.forEach(function(item, idx, arr) {
					if(idx != 0) {
						if(arr[minIdx] > item) {
							minIdx = idx;
						}
					}
				});
				return minIdx;
			}
			findMinIdx(arr);
			sortedArr.push(arr[minIdx]);
			arr.splice(minIdx, 1);
			selectionSort(arr);
		}
	}
	
	console.log("selection sort:", selectionSort(testArr.slice()));
	
	
	/* найти все простые числа до 10000 решетом эратосфена */
	
}