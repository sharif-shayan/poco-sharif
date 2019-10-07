let food = {
    "Name": "Reice",
    "serves": 2,
    "details": ["Reice", "Oil", "Salt"]
};
document.write("Name: " + food.Name + "<br>" + "serves:" + food.serves + "<br>");
document.write("details: " + food.details.join(", "));