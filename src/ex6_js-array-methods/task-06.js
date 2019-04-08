function myReduce(array, callback,initialValue) {
	var previousValue;
	var k = 0;
	if (initialValue !== undefined) {
		previousValue = initialValue;
	} else {
			previousValue = array[0];
			k++;
	};
	for (var i = k; i < array.length; i++) {
		previousValue = callback(previousValue, array[i], i, array);
  };
  return previousValue
}
module.exports = myReduce;
