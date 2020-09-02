

function dwarfRollCall(array){
  var names = "";
  for(let i = 0; i < array.length; i++){
    names += `${i+1}. ${array[i]} `;
  }
  return names;
}

function summonCaptainPlanet(array){
  for (let i = 0; i < array.length; i++){
    array[i] = (array[i].toUpperCase() + "!");
  }
  return array;
}

function longPlaneteerCalls(array){
  for (let i = 0; i < array.length; i++){
    var element = `${array[i]}`;
  }
  if (element.length > 4){
    return true;
  } else { 
    return false;
  }
}

