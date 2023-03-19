function distanceFromHqInBlocks(pickup) {
    const headquarters = 42
    let distanceInBlocks;

    if (pickup > headquarters) {
        distanceInBlocks = pickup - headquarters;
      } else {
        distanceInBlocks = headquarters - pickup;
      }
    return distanceInBlocks
  }

  function distanceFromHqInFeet(pickup) {
    const blockLength = 264; 
    let distanceInFeet = distanceFromHqInBlocks(pickup) * blockLength;
    return distanceInFeet;
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264;
    const distanceInBlocks = endBlock - startBlock;
    const distanceInFeet = distanceInBlocks * blockLength;
  
    if (distanceInBlocks < 0) {
      return distanceInFeet * -1;
    } else {
      return distanceInFeet;
    }
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
    if (distance <= 400) {
      fare = 0;
    } else if (distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
    return fare;
  }



