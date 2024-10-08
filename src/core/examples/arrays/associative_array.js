#!/usr/bin/env node
/*
	This is a demo of how to use associative arrays.
	Note that there is no way to know how many elements an associative array has
*/
function doWork(obj,name) {
	console.log("analysis of "+name);
	obj.one="First";
	obj["two"]="Second"; // jshint ignore:line
	obj.three="Third";
	console.log(typeof(obj));
	// length does not tell you how many elements the associative array has
	console.log(obj.length);
	for(var x in obj) {
		console.log(x+" -- "+obj[x]);
	}
}
doWork([],"[]");
doWork({},"{}");
doWork(new Object(),"new Object()"); // jshint ignore:line
doWork(Object(),"Object()"); // jshint ignore:line
