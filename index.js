// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location-42)
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264

}

function distanceTravelledInFeet(location1, location2) {
  return Math.abs(location2 - location1) * 264

}

function calculatesFarePrice(start, destination) {
  const traveled = distanceTravelledInFeet(start, destination)

  if (traveled < 400) {
    return 0
  } else if (traveled < 2000) {
    return traveled * .02
  } else if (traveled > 2500) {
    return "cannot travel that far"
  } else {
    return 25
  }




}
