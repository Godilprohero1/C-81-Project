var Mousevent = "empty";
  var last_place_x, last_place_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "lightgreen";
Width = 4;


canvas.addEventListener("mousedown", mousedown);
function mousedown(e) {
Mousevent = "Mousedown";
}
canvas.addEventListener("mousemove", mousemove);


function mousemove(e) {
x_axis = e.clientX - canvas.offsetLeft;
y_axis = e.clientY - canvas.offsetTop;

if (Mousevent == "mousedown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = Width;
console.log("The last x & y coordinates are");
console.log("x="+last_place_x+"y="+last_place_y);
ctx.moveTo(last_place_x, last_place_y);
console.log("the current x and y values are=");
console.log("x="+x_axis+"y="+y_axis);
ctx.lineTo(x_axis, y_axis);
ctx.stroke();
}
last_place_x=x_axis;
last_place_y=y_axis;
}