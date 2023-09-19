// Calculating no. of blocks from HQ to customers
function distanceFromHqInBlocks(pickupLocation) {
  let numberOfBlocks;
  const hqLocation = 42;
  if (pickupLocation > hqLocation) {
    numberOfBlocks = pickupLocation - hqLocation;
  } else {
    numberOfBlocks = hqLocation - pickupLocation;
  }

  return numberOfBlocks;
}

//Distance from HQ to customers in feet
function distanceFromHqInFeet(pickupLocation) {
  let distanceInFeet;

  distanceInFeet = distanceFromHqInBlocks(pickupLocation) * 264;
  return distanceInFeet;
}

//Customer's travel distance in feet
function distanceTravelledInFeet(startBlock, destination) {
  const travelDistance = Math.abs(startBlock - destination);
  const travelDistanceInFeet = travelDistance * 264;
  return travelDistanceInFeet;
}

//Charges for customer travels
function calculatesFarePrice(startBlock, destination) {
  let charges;
  let travelDistanceInFeet = distanceTravelledInFeet(startBlock, destination);
  if (travelDistanceInFeet <= 400) {
    charges = 0;
  } else if (travelDistanceInFeet > 400 && travelDistanceInFeet <= 2000) {
    charges = (travelDistanceInFeet - 400) * 0.02;
  } else if (travelDistanceInFeet > 2000 && travelDistanceInFeet <= 2500) {
    charges = 25;
  } else if (travelDistanceInFeet > 2500) {
    charges = "cannot travel that far";
  }
  return charges;
}
