#!/usr/bin/env node
function square_it(num) {
	return num*num;
}

function mapping(arr, f) {
	var result = [];
	/*
	var value;
	for (var i in arr) {
		value = f(arr[i]);
		result[i] = value; //same as resault.push(value);
	}
	*/
	//another option to iterate array (with annonymus function)
	arr.forEach(function(e) {
		result.push(f(e));
	});
	return result;
}

console.log(mapping([1, 2, 3, 4, 5], square_it));
