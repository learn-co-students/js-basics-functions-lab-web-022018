// Code your solution in this file!
const hq = 42;

function calculateVertical(beginning, destination){
  return Math.abs(beginning-destination)}

function distanceFromHqInBlocks(block){
  return calculateVertical(block, hq)}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block)*264}

function distanceTravelledInFeet(start,end){
  return calculateVertical(start, end)*264}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start,destination)
  if (distance<400){
    return 0
  }else if(distance>400&&distance<2000){
    return 2*distance/100
  }else if(distance > 2000 && distance<2500){
    return 25
  }else if (distance > 2500){
    return `cannot travel that far`
  }
}
