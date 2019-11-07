$(document).ready(function() {
    // all jQuery code goes here
   // $(title).html("New title");
    //var paragraphs = $("section p");
    //console.log($("section p a").html());
    //console.log($("section > p:mth-of-type(2)").text());
    //console.log($("section > p + p").text());

//exercise 1 of jQuery
    var temp = $("nav ul li").find("a").eq(2);
    console.log(temp.html());
    console.log('tesat');

    //exercise 2 of jQuery
    console.log($("label[for=email]").text());
    console.log($("label[type=email]").prev().text());

    //exercise 3 of jQuery
    console.log($("img[alt]").length);
    
//exercise 4

$("tbody tr:odd").addClass("odd");
console.log($("tbody tr:odd"));
$("tbody tr:odd").css("background-color", "green").css("color", "white");

$("section ul").before("<p>this the new text before my list</p>");
$("section ul").after("<p>this the new text after my list</p>");

$("section ul").prepend("<li>This is the new first list item in list</li>");

//exercise2.1
$("input[type=radio]:first").parent().addClass("class");
$("nav ul li").eq(3).addClass("current");
$("nav ul li").not($("nav ul li").eq(3)).addClass("disabled");
$("section#location h2").html("Change the content to new title");
$("img[alt]").each(function(){
    console.log($(this).attr("alt"));
});
$("a").click(function(){
console.log("click");
});
$("a").hover(function(){
    $(this).css("color", "red");
}, 
function(){
    $(this).css("color", "blue");
});

//hide figcaption. after each reload hide a section
$("figcaption").hide("slow", function(){

});

$("figcaption").animate(
    {
      opacity: .3,
      width: "500px",
      height: "700px"
    }, 2500, function() {
        alert("animated - haaa");
      // optional callback after animation completes  
    }
  );
  });