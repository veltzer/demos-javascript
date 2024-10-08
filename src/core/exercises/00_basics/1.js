#!/usr/bin/env node
function mySplit(str, seperator) {
	var result = [];
	var lastIndexFound=0;
	for(var i=0; i<str.length; i++) {
		if (str.charAt(i) == seperator) {
			result.push(str.substr(lastIndexFound, i-lastIndexFound));
			lastIndexFound = i+1;
		}
	}
	if(lastIndexFound!=i) {
		result.push(str.substr(lastIndexFound, i-lastIndexFound));
	}
	return result;
}
console.log(mySplit("bbbacccahhh","a"));
console.log(mySplit("aaaabbbbaaaaaccccaaaaahhhhh","a"));
console.log(mySplit("aaaaaaaaaaaa","a"));
console.log(mySplit("aaaabbbbaaaa","a"));
