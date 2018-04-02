// Code your solution in this file!
function distanceFromHqInBlocks(num)
{
  if (num > 42)
  {
    return num - 42;
  }
    else
  {
  return 42 - num;
  }
}

function distanceFromHqInFeet(num)
{
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(start, destination)
{
  if (destination < start)
  {
    return (start - destination) * 264;
  }
  else
  {
    return (destination - start) * 264;
  }
}

function calculatesFarePrice(start, destination)
{
  if (distanceTravelledInFeet(start, destination) <= 400)
  {
    return 0;
  }
  else if (distanceTravelledInFeet(start, destination)>400 && distanceTravelledInFeet(start, destination)<2000)
  {
    return distanceTravelledInFeet(start, destination) * .02;
  }
  else if ((distanceTravelledInFeet(start, destination) > 2000) && (distanceTravelledInFeet(start, destination) < 2500))
  {
    return 25;
  }
  else if (distanceTravelledInFeet(start, destination) > 2500)
  {
    return "cannot travel that far"
  }
}
