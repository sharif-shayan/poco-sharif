
let message = [
    "willcommen", "Ashamaa","བཀྲ་ཤིས་བདེ་ལེགས།","မင်္ဂလာပါ", "خوش کلیبسیز", "أهلاً بكم",
     "welcome", "So dhawaaw", "bixêrhatin","khush kelibsiz"];
let msgContainer = document.querySelector("header h3");
var counter = 0;
setInterval(ainmateMsg, 1500);
function ainmateMsg(){
    msgContainer.innerHTML = messeages[counter];
    counter++;
    if (counter >= messeages.length){
        counter = 0;
    }
}