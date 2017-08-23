function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function isClose(p1,p2,distance) {
	var d = Math.hypot(p2.x-p1.x, p2.y-p1.y)
	if(d > distance){
		return false
	}
	return true
}

function isInBounds(position,item) {
	if(position.x >= item.x &&
		position.x <= item.x + item.w &&
		position.y >= item.y &&
		position.y <= item.y + item.h) {
		return true
	}
	return false
}