// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42)
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264
}

function distanceTravelledInFeet(beginning, destination) {
  return Math.abs(destination - beginning) * 264
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  if ( distance <= 400) {
  return 0
} else if (distance > 400 && distance <= 2000) {
  return distance * .02
} else if (distance > 2000 && distance < 2500) {
  return 25
} else
  return 'cannot travel that far'

}
