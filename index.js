// Code your solution in this file!
function calculateVertical (startBlock, endBlock){
  return ((startBlock - endBlock) * 264)
}

function distanceFromHqInBlocks(destination){
  if (destination <= 42){
    return 42-destination;
  }
  else {
    return destination-42;
  }
}

function distanceFromHqInFeet(destination){
  return distanceFromHqInBlocks(destination)*264;
}

function distanceTravelledInFeet(start, destination){
  if (start > destination){
    return calculateVertical(start, destination);
  }
  else{
    return calculateVertical(destination, start);
  }
}

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0;
  }
  else if (distanceTravelledInFeet(start, destination)>=400 && distanceTravelledInFeet(start, destination)< 2000) {
    return distanceTravelledInFeet(start, destination) * .02;
  }
  else if (distanceTravelledInFeet(start, destination) >= 2000 && distanceTravelledInFeet(start, destination)<2500) {
    return 25;
  }
  else{
    return 'cannot travel that far';
  }
}
