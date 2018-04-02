function distanceFromHqInBlocks(num) {
  if (num < 42) {
    return 42 - num;
  } else {
    return num - 42;
  }
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet (origin, dest) {
  if (origin < dest) {
    return (dest - origin) * 264;
  } else {
    return (origin - dest) * 264;
  }
}

function calculatesFarePrice (origin, dest) {
  const distance = distanceTravelledInFeet(origin, dest);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * distance;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
