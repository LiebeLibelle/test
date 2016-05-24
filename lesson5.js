function ready() {
	var canvas = document.getElementById("meow");
	var ctx = canvas.getContext('2d');
	
	ctx.fillStyle = "#45EF09";  
	ctx.fillRect(10, 10, 55, 50);
	
	ctx.fillStyle = "#DEAD80"; 
	ctx.fillRect(60, 60, 55, 50);
	
	ctx.beginPath();
	ctx.arc(200,200,50, 0,2 * Math.PI);
	ctx.strokeStyle = "#45EF09";  
	ctx.stroke();
	ctx.fillStyle = "#FFF"; 
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.arc(400,200,50, 0,2 * Math.PI);
	ctx.stroke();
	ctx.closePath();
	
	
	var x = 100;
	var y = 100;
	var rad = 20;
	setInterval(function() {
		ctx.fillStyle = "#FFF"; 
		ctx.fillRect(0,0,400,400);
		ctx.fillStyle = "#F00"; 
		ctx.beginPath();
		x += (Math.random()*5 - 2.5);
		y += (Math.random()*5 - 2.5);
		ctx.arc(x*2,y*2,50, 0,2 * Math.PI); 
		ctx.fill();
		ctx.stroke();
		
	}, 10);
	
	
	/* exercise: draw christmas tree with red star at the top and draw array with coordinates (as object) of balls */
}
