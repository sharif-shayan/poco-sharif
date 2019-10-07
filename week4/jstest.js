let myHeading = document.querySelector('h1');
console.log(myHeading);
myHeading.textContent = "Hello world!";

let myImage = document.querySelector('pic1.png');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'pic1.png') {
      myImage.setAttribute ('src','pic1.png');
    } else {
      myImage.setAttribute ('src','pic1.png');
    }
}
let firstparagraph = document.querySelector(".my_id");
let secondtparagraph = document.querySelector(".my_class");