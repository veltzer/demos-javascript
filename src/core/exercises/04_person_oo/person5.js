#!/usr/bin/env node
function Person(iname,iage) {
	this.name=iname;
	this.age=iage;
	this.getName=Person.getName;
	this.setName=Person.setName;
	this.getFullName=Person.getFullName;
	this.printSelf=Person.printSelf;
	this.toString=Person.toString;
}
Person.getName=function() {
	return this.name;
};
Person.setName=function(iname) {
	this.name=iname;
};
Person.getFullName=function() {
	return this.name+" "+this.age;
};
Person.printSelf=function() {
	console.log(this.getFullName());
};
Person.toString=function() {
	var s="";
	for(var key in this) {
		if(typeof(this[key])!="function") {
			s+=key+": "+this[key];
		}
	}
	return s;
};

// This is the client code
var p1=new Person("Bilbo",111);
var p2=new Person("Frodo",33);
console.log(p1);
console.log(p2);
