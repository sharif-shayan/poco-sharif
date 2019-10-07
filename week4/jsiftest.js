let a = 5;
let b = 10;
if(a < b){
    alert("the greeter number of " + a + " and " + b + " is " + b);
}
else if(a > b){
    alert("the smaller number of " + a + " and " + b + " is " + a );
}
else{
    alert(a + " and " + b + " are the same");
}
let titleTag = document.querySelector("h1");
if((titleTag) || (a < 7)){
    titleTag.innerHTML = "My New Title"
}
else{
    titleTag.innerHTML = "the title not changed"
}



