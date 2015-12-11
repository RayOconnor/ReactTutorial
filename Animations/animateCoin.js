var coinImage = new Image();
coinImage.src = "coin-sprite-animation-sprite-sheet.png";

function sprite (options) {
    var that = {};

    that.render = function () {
        // Draw the animation
        that.context.drawImage(
           that.image,
           0,
           0,
           that.width,
           that.height,
           0,
           0,
           that.width,
           that.height);
    };

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    return that;
}

var canvas = document.getElementById("coinAnimation");
canvas.width = 100;
canvas.height = 100;

var coin = sprite({
    context: canvas.getContext("2d"),
    width: 100,
    height: 100,
    image: coinImage
});

coin.render();
