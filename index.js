// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(42-street)
}

function distanceFromHqInFeet(street) {
  return 264 * distanceFromHqInBlocks(street)
}

function distanceTravelledInFeet(streetA, streetB) {
  return 264 * Math.abs(streetA - streetB)
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * distance
  } else if (distance > 2000 && distance <= 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
}
