// Code your solution in this file!
function distanceFromHqInBlocks(block){
number = block - 42
number = Math.abs(number)
return number
}

function distanceFromHqInFeet(block){
number = distanceFromHqInBlocks(block) * 264
return number
}

function distanceTravelledInFeet(start,end){
number = start - end
number = Math.abs(number)
number = number * 264
return number
}

function calculatesFarePrice(start,end){
  if (distanceTravelledInFeet(start,end) < 400){
  return 0 }
  else if (distanceTravelledInFeet(start,end) > 400 && distanceTravelledInFeet(start,end) < 2000){
    return distanceTravelledInFeet(start,end) * 0.02
  }
  else if (distanceTravelledInFeet(start,end) >2500){
    return 'cannot travel that far'
  }
  else if (distanceTravelledInFeet(start,end) > 2000){
    return 25
  }


}
