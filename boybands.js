var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var loopCount = bands.length;

var bandElement = document.getElementById("boy-bands");

var veggieElement = document.getElementById("vegetables");

var currentBand = bandElement.innerHTML + "<ul>";

var currentVeggie = veggieElement.innerHTML + "<ul>";

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  currentBand += "<li>" + bands[loopTracker] + "</li>";

  currentVeggie += "<li>" + vegetables[loopTracker] + "</li>";
 
}

currentBand += "</ul>";
currentVeggie += "</ul>";

document.getElementById("boy-bands").innerHTML = currentBand;
document.getElementById("vegetables").innerHTML = currentVeggie;
