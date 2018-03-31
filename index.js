// Code your solution in this file!
function calculateVertical(b1, b2) {
  return Math.abs(b1 - b2) * 264
}

function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block)
}


function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(b1, b2) {
  return calculateVertical(b1, b2)
}


function calculatesFarePrice(b1, b2) {
  let distance;
  distance = distanceTravelledInFeet(b1, b2);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000){
    return distance * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}
