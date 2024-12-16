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
  "images/HOLLY/s1.png",
  "images/HOLLY/s2.png",
  "images/HOLLY/s3.png",
  "images/HOLLY/s4.png",
  "images/HOLLY/s5.png",
  "images/HOLLY/s6.png",
  "images/HOLLY/s7.png",
  "images/HOLLY/s8.png",
  "images/HOLLY/s9.png",
  "images/HOLLY/s10.png",
  "images/HOLLY/s11.png",
  "images/HOLLY/s12.png",
  "images/HOLLY/s13.png",
  "images/HOLLY/s14.png",
  "images/HOLLY/s15.png",
  "images/HOLLY/s16.png",
  "images/HOLLY/s17.png",
  "images/HOLLY/s18.png",
  "images/HOLLY/s19.png",
  "images/HOLLY/s20.png",
  "images/HOLLY/s21.png",
  "images/HOLLY/s22.png",
  "images/HOLLY/s23.png",
  "images/HOLLY/s24.png",
  "images/HOLLY/s25.png"
);
