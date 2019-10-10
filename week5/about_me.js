document.body.style.fontFamily = "Arial, sans-serif";
document.getElementById("nickname").textContent = "Hasan";
document.getElementById("favorites").textContent = "AMG, AOS, MFG";
document.getElementById("hometown").textContent = "Genf";

let liTags = document.querySelectorAll("li");
liTags.forEach(function(singleLi){
    singleLi.className = "list-item";

});
let newImage = document.createElement("img");
newImage.src = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg";
document.body.appendChild(newImage);
let styleTag = document.createElement("link");
styleTag.rel = "stylesheet";
styleTag.href = "style.css";

document.head.appendChild(styleTag);