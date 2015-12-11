var canvas = document.getElementById("coinAnimation");
canvas.width = 400;
canvas.height = 100;
var context=canvas.getContext("2d");

var coinImage = new Image();
coinImage.src = "birdy.png";

coinImage.onload = function () {
  context.drawImage(coinImage,0,0);
}
