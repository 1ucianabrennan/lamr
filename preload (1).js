console.log("Preload running...");

// loop through all the content you want to preload
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images and sounds
preload(
  "images/ALEX/1.png",
  "images/ALEX/2.png",
  "images/ALEX/3.png",
  "images/ALEX/4.png",
  "images/ALEX/5.png",
  "images/ALEX/6.png",
  "images/ALEX/7.png",
  "images/ALEX/8.png",
  "images/ALEX/9.png",
  "images/ALEX/10.png",
  "images/ALEX/11.png",
  "images/ALEX/12.png",
  "images/ALEX/13.png",
  "images/ALEX/14.png",
  "images/ALEX/15.png",
  "images/ALEX/16.png",
  "images/ALEX/17.png",
  "images/ALEX/18.png",
  "images/ALEX/19.png",
  "images/ALEX/20.png",
  "images/ALEX/21.png",
  "images/ALEX/22.png",
  "images/ALEX/23.png",
  "images/ALEX/24.png"
);
