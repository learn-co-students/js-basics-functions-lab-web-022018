function calculateVertical(street1, street2){
	return Math.abs((street2 - street1) * 264)
}

function distanceFromHqInBlocks(street){
	return Math.abs(street - 42)
}

function distanceFromHqInFeet(street){
	distanceFromHqInBlocks;
	return Math.abs(calculateVertical(42, street))
}

function distanceTravelledInFeet(street1, street2){
	return calculateVertical(street1, street2)
}

function calculatesFarePrice (street1, street2) {
	feet = calculateVertical(street1, street2)
	if (feet <= 400){
		return 0
	}else if (feet > 400 && feet <= 2000){
		return .02 * feet
	}else if (feet <= 2500){
		return 25
	}else{
		return 'cannot travel that far'
	}
}