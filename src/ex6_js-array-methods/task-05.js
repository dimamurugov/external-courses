function myMap(array, callback) {
	var array2 = [];
	for (var i = 0; i < array.length; i++) {
    	array2[i] = callback(array[i], i, array);
    };
  return array2
}
module.exports = myMap;
