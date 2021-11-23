const scuberHq = 42;

function distanceFromHqInBlocks(location) {
    let distanceB = location - scuberHq;
    return Math.abs(distanceB);
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let distanceT = (start - destination) * 264;
    return Math.abs(distanceT);
}

function calculatesFarePrice(start, destination) {
    let totalFt = distanceTravelledInFeet(start, destination);

    if (totalFt < 400)
        return 0;
    else if (totalFt < 2000) 
        return 2.56;
    else if (totalFt > 2000 && totalFt < 2500)  
        return 25;
    else 
        return 'cannot travel that far';    
}
