function distanceFromHqInBlocks(x) {
  return Math.abs(42 - x)
}

function calculateVertical(start, destination) {
  return Math.abs(destination - start)*264
}

function distanceFromHqInFeet(x) {
  return distanceFromHqInBlocks(x)*264
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start)*264
}

function calculatesFarePrice(start, destination) {
  var feet = distanceTravelledInFeet(start, destination);
  var fare;

  if (feet <= 400){
    fare = 0.00;
  } else if (feet <= 2000){
    fare = feet * .02;
  } else if (feet <= 2500){
    fare = 25.00;
  } else {
    fare = 'cannot travel that far';
  }
  return fare;
}
