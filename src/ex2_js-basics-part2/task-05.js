function Mass(arr){
	var max = null;
	for(var i = 0; i < arr.length; i++){
		if (max < arr[i]) {max = arr[i]} 
	}	
	return max;
};
module.exports = Mass;