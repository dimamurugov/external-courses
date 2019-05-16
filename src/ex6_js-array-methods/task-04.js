function myFilter(array, callback) {
	var result, j;
	result = [];
	j = 0;
	for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)){
			result[j] = array[i];
			j++;
    }
  };
  return result;
}

module.exports = myFilter;
