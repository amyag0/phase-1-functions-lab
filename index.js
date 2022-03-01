

function distanceFromHqInBlocks(start){
    return Math.abs(start-42) //gets the absolute value of the difference
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264
}

function distanceTravelledInFeet (start, destination){
    return (Math.abs(destination-start)*264)
}

function calculatesFarePrice(start, destination) {
const feetTravelled = distanceTravelledInFeet(start,destination);
    
    if (feetTravelled<=400){
        return 0;

    } else if (feetTravelled< 2000){
       return .02*(feetTravelled-400);
    }else if(feetTravelled<2500){
       return 25;
    }else if(feetTravelled > 2500){
        return "cannot travel that far";
    }
}








/*






            
    //returns the number of feet traveled
let distanceTraveled=distanceFromHqInFeet(block); 
return distanceTraveled(block);
}

function calculatesFarePrice(block) {
    //returns the fare for the customer
    let pricePerBlock=2*264; // 2 cents per block
    let blocksIWent=distanceFromHqInBlocks(block);
    let cost= blocksIWent()*pricePerBlock;
return cost;
}

    The first four
    hundred feet are free. For a distance between 400 and 2000 feet, the price is
    2 cents per foot (not including 400, which are free!). Then Scuber charges a
    flat fare for a distance over 2000 feet and under 2500 feet.
    Finally, Scuber does not allow any rides over 2500 feet — the function returns
    `'cannot travel that far'` if a ride over 2500 feet is requested.*/


