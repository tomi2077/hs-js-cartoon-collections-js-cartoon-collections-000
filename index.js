function dwarfRollCall(dwarves) {
  var rollcall = "";
  dwarves.forEach(function(name, i) {
  	rollcall += (i+1 + ". " + name + " ");
  });
  return rollcall;
}

dwarfRollCall(["Doc", "Dopey", "Bashful", "Grumpy"]);


function summonCaptainPlanet(planeteerCalls){
var arr = [];
for (var i of planeteerCalls){
  
  arr.push(i.toUpperCase() + "!");
  } return arr;

}
summonCaptainPlanet(["earth", "wind", "fire", "water", "heart"]);




function longPlaneteerCalls(words){

for (var i of words){
if (i.length > 4){
  return true;
}
else if (i.length <= 4){
  return false;
}
}
}

longPlaneteerCalls(["earth", "wind", "heart", "fire"]);


function findTheCheese(ingredients){

var cheese = ["camembert", "cheddar", "gouda"];

for(var i = 0; i < ingredients.length; i++){
for (var j = 0; j < cheese.length; j++){
  if (ingredients[i] === cheese[j]){
    return cheese[j]
  }
}

}
return "no cheese!";
}
findTheCheese(["tomato soup", "cheddar", "oyster crackers", "gouda"]);


