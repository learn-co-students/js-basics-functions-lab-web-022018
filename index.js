// Code your solution in this file!
function distanceFromHqInBlocks(n) {
  if(n < 42) {
    return 42 - n;
  } else {
    return n - 42;
  }
}

function distanceFromHqInFeet(n) {
  return distanceFromHqInBlocks(n) * 264;
}

function distanceTravelledInFeet(n1, n2) {
  if (n1 > n2) {
    return (n1 - n2) * 264;
  } else {
    return (n2 - n1) * 264;
  }
}

function calculatesFarePrice(n1, n2) {
  const d = distanceTravelledInFeet(n1, n2);
  if(d <= 400) {
    return 0;
  } else if(d > 400 && d<= 2000) {
    return 0.02 * d;
  } else if (d > 2000 && d < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
