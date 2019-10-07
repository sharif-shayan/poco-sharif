var leftPos = 0;
var topPos = 0 ; 
var radios = 0;
var intervalId;

intervalId = setInterval(function(){
    if(leftPos>550 || topPos > 500){
        clearInterval(intervalId);
    }
    leftPos += 50;
    topPos += 40;
    radios += 10;
    let box = document.getElementById("box");
    box.style.left = leftPos+"px";
    box.style.top = topPos+"px"; 
    box.style.borderRadius = radios+"%";
}, 500)