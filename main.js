var canvas = new fabric.Canvas("avengers-canvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_avengers()
{
	fabric.Image.fromURL("player.jpg", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}
function new_image(get_image){
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){

	keypress = e.keyCode ;
	console.log(keypress);

	if(e.shiftKey == true && keypress == "80"){
		console.log("p and Shift are Pressed");
		block_image_width = block_image_width + 10;
		block_image_height = block_image_height + 10;
		document.getElementById("current_width").innerHTML = block_image_width;
		document.getElementById("current_height").innerHTML = block_image_height;
		}
	if(e.shiftKey == true && keypress == "77"){
		console.log("M and Shift are Pressed");
		block_image_width = block_image_width - 10;
		block_image_height = block_image_height - 10;
		document.getElementById("current_width").innerHTML = block_image_width;
		document.getElementById("current_height").innerHTML = block_image_height;

	}
	if(keypress == "38"){
		up();
		console.log("up");
	}
	if(keypress == "40"){
		down();
		console.log("down");
	}
	if(keypress == "39"){
		right();
		console.log("right");
	}
	if(keypress == "37"){
		left();
		console.log("left");
	}
	if(keypress == "72"){
		new_image("thor_right_hand.png");
		console.log("h")
	}
	if(keypress == "71"){
		new_image("thor_left_hand.png");
		console.log("g");
	}
	if(keypress == "84"){
		new_image("thor_face.png");
		console.log("t");
	}
	if(keypress == "76"){
		new_image("spiderman_right_hand.png");
		console.log("l");
	}
	if(keypress == "89"){
		new_image("spiderman_legs.png");
		console.log("y");
	}
	if(keypress == "85"){
		new_image("spiderman_left_hand.png");
		console.log("u")
	}
	if(keypress == "67"){
		new_image("spiderman_face.png");
		console.log("c")
	}
	if(keypress == "79"){
		new_image("spiderman_body.png");
		console.log("o")
	}
	if(keypress == "82"){
		new_image("ironman_right_hand.png");
		console.log("r");
	}
	if(keypress == "68"){
		new_image("ironman_legs.png");
		console.log("d")
	}
	if(keypress == "87"){
		new_image("ironman_left_hand.png");
		console.log("w")
	}
	if(keypress == "81"){
		new_image("ironman_face.png");
		console.log("q")
	}
	if(keypress == "78"){
		new_image("ironman_body.png");
		console.log("n")
	}
	if(keypress == "88"){
		new_image("hulk_right_hand.png");
		console.log("x")
	}
	if(keypress == "90"){
		new_image("hulk_legs.png");
		console.log("z")
	}
	if(keypress == "74"){
		new_image("hulk_left_hand.png");
		console.log("j")
	}
	if(keypress == "83"){
		new_image("hulk_face.png");
		console.log("s")
	}	
}
function up(){
	if(player_y >= 0){
		player_y = player_y - block_image_height;
		console.log("The X coordinate of player is "+player_x+" The Y coordinate of player is "+player_y);
		canvas.remove(player_object);
		player_avengers();
	}
}
function down(){
	if(player_y <= 400){
		player_y = player_y + block_image_height;
		console.log("The X coordinate of player is "+player_x+" The Y coordinate of player is "+ player_y);
		canvas.remove(player_object);
		player_avengers();
	}
}
function left(){
	if(player_x >= 0){
		player_x = player_x - block_image_width;
		console.log("The X coordinate of player is "+player_x+" The Y coordinate of player is "+player_y);
		canvas.remove(player_object);
		player_avengers();
	}
}
function right(){
	if(player_x <= 700){
		player_x = player_x + block_image_width;
		console.log("The X coordinate of player is "+player_x+" The Y coordinate of player is "+player_y);
		canvas.remove(player_object);
		player_avengers();
	}
}
