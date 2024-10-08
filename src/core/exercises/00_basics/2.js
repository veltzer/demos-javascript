#!/usr/bin/env node
function min_max_avg(arr) {
	var min=0; var max=0; var sum=0;
	for (var i = 0; i<arr.length; i++) {
		if (i===0) {
			min=max=avg=arr[0];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}
	var avg = sum / arr.length;
	return {
		min: min,
		max: max,
		avg: avg
	};
}

var arr = [1, 2, 3, 4, 5];
console.log(min_max_avg(arr));
