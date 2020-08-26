function dwarfRollCall(name) {
  var str = "";
  for (let i = 0; i < name.length; i++) {
    str += `${(i+1)}. ${name[i]} `
  }
  return str
}

function summonCaptainPlanet(planet){
  var arr = [];
  for (let i = 0; i < planet.length; i++){
    arr.push(planet[i].toUpperCase() + "!")
  }
  return arr
}

function longPlaneteerCalls(words) {
  var empty = "";
  for (let i = 0; i < words.length; i++){
    empty = `${words[i]}`;
    if (empty.length <= 4){
      return false
    } else {
      return true
    }
  }
}

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++){
    if (foods[i] == "cheddar") {
      return "cheddar";
    } else if (foods[i] == "gouda"){
      return "gouda";
    } else if (foods[i] == "camembert"){
      return "camembert";
    }
    }
    return "no cheese!"
  }
