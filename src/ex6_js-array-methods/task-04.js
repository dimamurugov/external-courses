function myFilter(array, callback) {
	var array2 = [];
	var j = 0;
	for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)){
			array2[j] = array[i];
			j++;
    }
  };
  return array2;
}

module.exports = myFilter;
