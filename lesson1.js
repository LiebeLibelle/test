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
}