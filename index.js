function distanceFromHqInBlocks(location) {
  return Math.abs(42-location)
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(one, two) {
  return Math.abs(one-two)*264
}

function calculatesFarePrice(one, two) {
  if (distanceTravelledInFeet(one, two) <= 400) {
    return 0
  } else if (distanceTravelledInFeet(one, two) > 400 && distanceTravelledInFeet(one, two) <= 2000) {
    return distanceTravelledInFeet(one, two) * 2 / 100
  } else if (distanceTravelledInFeet(one, two) > 2000 && distanceTravelledInFeet(one, two) <= 2500) {
    return 25
  } else if (distanceTravelledInFeet(one, two) > 2500) {
    return 'cannot travel that far'
  }
}
