#!/usr/bin/env node
var g_getName=function() {
	return this.name;
};
var g_setName=function(iname) {
	this.name=iname;
};
var g_getFullName=function() {
	return this.name+" "+this.age;
};
var g_printSelf=function() {
	console.log(this.getFullName());
};

function createPerson(iname,iage) {
	return {
		name: iname,
		age: iage,
		getName: g_getName,
		setName: g_setName,
		getFullName: g_getFullName,
		printSelf: g_printSelf
	};
}
var p1=createPerson("Bilbo",111);
var p2=createPerson("Frodo",33);
p1.printSelf();
p2.printSelf();
