var dwarves = ["Dopey", "Grumpy", "Bashful"];
function dwarfRollCall(dwarves) {
  var array = [];
  dwarves.forEach((dwarf, i)=>array.push
  (`${i + 1}. ${dwarves[i]} `));
  return array.join("");
}

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];
function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(a=>a.toUpperCase() +"!");
}

var words = ["earth", "wind", "fire", "water", "air"];
function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++){
    if(words[i].length>4) {
      return true;
    }
  }
  return false
}

function findTheCheese (foods) {
  for(var i = 0; i<foods.length; i++){
    if (foods[i]=="cheddar"
    ||foods[i]=="gouda"
    ||foods[i]=="camembert")
    return foods[i];
  }
  return "no cheese!";
}
