

function myFunction() {
    var x = document.getElementById("myTextarea").value;
    document.getElementById("demo").innerHTML = printEvenOrOdd(x);
  }
function printEvenOrOdd(val) {
    if (val % 2 == 0) {
        return val + " is even number";
    } else {
        return val + " is odd number";
    }
}

let n;
let m;
for
    (n = 1; n <= 10; n++) {
        m = n * 9;
        document.write( "<br>" + m);
}

// var i;
// for (i = 0; i <= 20; i++) {
//     if(i%2 == 0){
//      document.write(i + " is Even number <br>");
//     }
//     else{
//         document.write(i + " is odd number <br>")
//     }
  
// }
