//define function that takes array dwarves as argument, set empty array, instruct function to move incrementally thru array and push resulting message to empty array. should return dwarf index number plus one and the appropriate dwarf name, .join returns statement as a string

var dwarves = ["Dopey", "Grumpy", "Bashful"];
function dwarfRollCall(dwarves) {
  var array = [];
  dwarves.forEach((dwarf, i)=>array.push
  (`${i + 1}. ${dwarves[i]} `));
  return array.join("");
}

//define a function to convert planeteerCalls to uppercase and add an exclamation point. .map creates a new array with results of calling function, .toUpperCase to convert character case

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];
function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(a=>a.toUpperCase() +"!");
}

//define a function to check length of words variables, if longer than four characters return true otherwise false. 3rd line of code tells function how to move thru array starting with index 0 incrementally, 4th instructs function to check character length

var words = ["earth", "wind", "fire", "water", "air"];
function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++){
    if(words[i].length>4) {
      return true;
    }
  }
  return false;
}

//define a function to search array foods for the following cheeses, if cheese is located return cheese located, other wise return no cheese. instruct function to move incrementally thru array, double pipes act as or operater

var foods = ["cheddar", "gouda", "camembert"];
function findTheCheese(foods) {
  for(var i = 0; i<foods.length; i++){
    if (foods[i]=="cheddar"
    ||foods[i]=="gouda"
    ||foods[i]=="camembert"
    ||foods[i]=="swiss")
    return foods[i];
  }
  return "no cheese!";
}


function wordsWithB(words) {
  for(var i = 0; i<words; i++)
  