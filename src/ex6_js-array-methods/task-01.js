function mySlice(arr,begin,end) {
	var arr2 = [];
	var j = 0;
  var beginIn = begin;
  var endIn = end;
	if (((begin >= 0) || (begin === undefined)) && ((end >= 0) || (end === undefined))) {
    if (typeof begin === 'undefined') {
			beginIn = 0;
		};
		if (typeof end === 'undefined') {
			endIn = arr.length;
		};
		for (var i = beginIn; i < endIn; i++) {
				arr2[j] = arr[i];
				j++;
		};
	} else {
		if (typeof end === 'undefined') {
			endIn = arr.length*(-1);
		};
		if (typeof begin === 'undefined') {
			beginIn = arr.length;
		};
		for (var k = arr.length + beginIn; k < arr.length + endIn; k++) {
			arr2[j] = arr[k];
			j++;
		}
	};
	return arr2
}

module.exports = mySlice
