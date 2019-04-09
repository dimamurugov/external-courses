function toRandomFrom(min,max) {
	return parseInt(Math.random()*(max-min)+min, 10);
}

module.exports = toRandomFrom;
