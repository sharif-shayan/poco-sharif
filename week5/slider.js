let images = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-instagram-captions-1570480675.jpg?crop=1.00xw:0.752xh;0,0&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/love-quotes-for-him-1568916541.jpg?crop=1.00xw:0.752xh;0.00160xw,0.0962xh&resize=480:*",

    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-quotes-1570467453.jpg?crop=1.00xw:0.503xh;0,0.0545xh&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vampire-quotes-1564414841.jpg?crop=1.00xw:0.997xh;0,0&resize=480:*"
];
let counter = 0;

let buttons = document.getElementsByTagName("button");
let prevButton = buttons[0];
let nextButton = buttons[1];
let image = document.getElementById("slider");
/*
let prevButton = document.querySelector("button");
let nextButton = document.querySelector("img + button");
*/
prevButton.addEventListener("click", showPrev, true);
nextButton.addEventListener("click", showNext, true);

function showPrev(){
counter--;
if(counter < 0){
    counter = images.length-1;
}
image.src = images[counter];
}
function showNext(){
counter++;
if(counter > images.length-1){
    counter = 0;
}
image.src = images[counter];
}