function myReduce(array, callback,initialValue) {
	var previousValue;
	var firstElement = 0;
	if (initialValue !== undefined) {
		previousValue = initialValue;
	} else {
			previousValue = array[0];
			firstElement++;
	};
	for (var i = firstElement; i < array.length; i++) {
		previousValue = callback(previousValue, array[i], i, array);
  };
  return previousValue
}
module.exports = myReduce;
