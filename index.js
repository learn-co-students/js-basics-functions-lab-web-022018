// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block);
}
function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}
function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}
function calculatesFarePrice(start, end) {
  let dist = distanceTravelledInFeet(start, end)
  if (dist >= 400 && dist <= 2000) {
    return dist * .02
  } else if (dist >= 2000 && dist <= 2500) {
    return 25
  } else if (dist > 2500) {
    return 'cannot travel that far'
  } else if (dist < 400) {
    return 0
  }
}
