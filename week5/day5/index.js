
var x = document.getElementById("result");
var request = new XMLHttpRequest();

request.open("get", "https://ghibliapi.herokuapp.com/people", true);
request.onreadystatechange = function(){
    if (request.readyState===4 && request.status===200){
        let result = JSON.parse(request.responseText);
        let temp = "";
        console.log(result.length);
        result.forEach(function(object){
            temp += "<li>";
            for(let prop in object){
                temp += "<p>" + prop + ": "+object[prop]+ "</p>";
            }
            temp += "</li>";
        });
            
        
        x.innerHTML = request.responseText;
        x.className = "micro-ani";
    }
}

var btn = document.querySelector("button");
btn.addEventListener("click", sendAJAXCall, true);

function sendAJAXCall(){
request.send();
}