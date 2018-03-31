// Code your solution in this file!
 // Write a function called calculateVertical that takes in the beginning and destination blocks and
 // returns the number of feet travelled.
 // Each block in Manhattan is 264 feet long. For example calculateVertical(34, 38) returns 1056 ((38-34)*264
 //
 //
 // distanceFromHqInBlocks: Returns the number of blocks from Scuber's headquarters to the
  // pickup location.
 //
 function distanceFromHqInBlocks(block){
   // return block - 42 if block > 42
   // block > 42 ? return block - 42 : return 42 - block;
   if (block > 42) { return (block - 42)}
   else if (block < 42) { return (42 -block)   }
   else {return 0}
 }
 // distanceFromHqInFeet: Returns the number of blocks from Scuber's headquarters to the pickup location.
 //  Note that you can use your distanceFromHqInBlocks function to help return the correct value here. Here is an example
 //   of how to do this:
 //
 function distanceFromHqInFeet(distance) { return distanceFromHqInBlocks(distance) * 264}

 // distanceTravelledInFeet: Calculates the number of feet a passenger travels given a starting block and an ending block -
 //    it only calculates distance North and South. It uses the knowledge that a block is 264 feet long.
 function distanceTravelledInFeet(startBlock, endBlock) {
   totalBlocks = Math.abs(startBlock-endBlock)
   return totalBlocks * 264
 }
 // calculatesFarePrice: Given the same starting and ending block, return the fare for the customer.
 //  The first four hundred feet are free.
 //  For a distance between 400 and 2000 feet, the price is 2 cents per foot.
 //  Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
 //   Finally Scuber does not allow any rides over 2500 feet - the function returns 'cannot travel that far'
 //      if a ride over 2500 feet is requested.
 function calculatesFarePrice(startBlock, endBlock){
   totalFeet = distanceTravelledInFeet(startBlock,endBlock)
   // console.log(totalFeet)
   if (totalFeet<400) { return 0}
   else if (totalFeet <= 2000) {return (totalFeet * .02 ) }
   else if (totalFeet <= 2500) {return (25)}
   else { return "cannot travel that far"}
 }//calculatesFarePrice
