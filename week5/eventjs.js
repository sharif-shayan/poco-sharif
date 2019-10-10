function myClickFunc(elm){
    elm.innerHTML="you clicked me";
    elm.style.color= "green";
}
let h1 = document.querySelector("h1");
//h1.onclick = myClickFunc(this);
h1.onclick = function() 
{myClickFunc(this) };

Window.onload = function(){
    alert("window is loaded");
}