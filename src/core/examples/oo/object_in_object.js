#!/usr/bin/env node
/*
	This example test whether or not you can put an object into
	another object and get it out ok.

	Conclusions:
	- java script keys of objects are STRINGS and not general
	objects. Avoid using the key part extensivly to get out
	of trouble.
*/
// start of the Person class
function Person(name,age) {
	this.name=name;
	this.age=age;
}
Person.prototype.setName=function(newname) {
	this.name=newname;
};
Person.prototype.getName=function() {
	return this.name;
};
// end of the Person class
var p=new Person("mark","37");
console.log(p.getName());
var o={};
o[p]=undefined;
// this next loop would produce an error because
// the toString is what really gets saved inside
// the class
for(var i in o) {
	console.log(i);
	console.log(typeof i);
	try {
		console.log(i.getName());
	} catch(error) {
		console.log("yes, I got an error just like I thought");
		console.log(typeof error);
	}
}
