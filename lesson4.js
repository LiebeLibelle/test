function ready() {
	
	
	console.log("lesson 4");
	
	console.log("example object:", {diameter:0.15, volume: 0.3, color:"#AAAAFF"});
	
	
	var dishes = [{diameter:0.1, volume: 0.2, color:"#AAAAFF"}, {diameter:0.3, volume: 0.3, color:"#AAAAFF"}];
	dishes.push({diameter:0.35, volume: 0.5, color:"#FF0000"});
	console.log("array of objects:", dishes);
	
	console.log("volume of first dish:", dishes[0].volume);
	
	var diameter = 0.15;
	var dish = {
		diameter: diameter,
		volume: 0.3,
		color:"#AAAAFF",
		print_themselve:function() {
			console.log("i'm a dish! And my volume is ", this.volume);
		}
	};
	
	diameter = diameter * 2;
	
	console.log("example object:", dish);
	dish.print_themselve();
	console.log("Math object:", Math);
	
	console.log("DOM html:", document.getElementsByTagName("div")[1].innerHTML);
	document.getElementsByTagName("div")[1].innerHTML = "UOUUUUU!";
	
	/* exercise: filter array of dishes: dish volume >= 0.3 */
	
	console.log("only large dishes", dishes.filter(function(dish) {
		return dish.volume >= 0.3;
	}));
	
	
	function Dish (diameter, volume, color) {
		if (typeof(diameter) != "number") throw new Error("wrong type of diameter");
		if (typeof(volume) != "number") throw new Error("wrong type of volume");
		if (typeof(color) != "string") throw new Error("wrong type of color");
		if (diameter <= 0) throw new Error("diameter < 0");
		if (volume <= 0) throw new Error("volume < 0");
		if (!((new RegExp("#[0-9a-fA-F]{6}")).test(color))) throw new Error("wrong color format: " + color);
		
		this.diameter = diameter;
		this.volume = volume;
		this.color = color;
	}
	
	Dish.prototype.scale = function(factor) {
		this.diameter *= factor;
		this.volume *= Math.pow(factor, 3);
	}
	
	
	var smallDishes = [new Dish(0.5, 0.2, "#006100"), new Dish(0.12, 0.15, "#006600"), new Dish(0.2, 0.22, "#DEAD00")];
	smallDishes.forEach(function(dish) {
		dish.scale(2);
	});
	console.log(smallDishes);
	
	/* ********* */
	
	var canvas = document.getElementById("");
	//var ctx = canvas.getContext("2d");
	
	function Figure() {}
	
	Figure.prototype.scale = function() {
	ctx.save();
    ctx.scale(10, 3);
    ctx.fillRect(1,10,10,10);
    ctx.restore();
	}
	
}