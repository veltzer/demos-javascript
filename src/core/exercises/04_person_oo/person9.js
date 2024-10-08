#!/usr/bin/env node
/*
Person with Employee as child
*/

// here starts code of person
function Person(iname,iage) {
	this.name=iname;
	this.age=iage;
}
Person.prototype.getName=function() {
	return this.name;
};
Person.prototype.setName=function(iname) {
	this.name=iname;
};
Person.prototype.getAge=function() {
	return this.age;
};
Person.prototype.setAge=function(iage) {
	this.age=iage;
};
Person.prototype.getFullName=function() {
	return this.name+" "+this.age;
};
Person.prototype.printSelf=function() {
	console.log(this.getFullName());
};
Person.prototype.toString=function() {
	var s="";
	for(var key in this) {
		if(typeof(this[key])!="function") {
			s+=key+": "+this[key];
		}
	}
	return s;
};
// here ends code of person

// here starts code of Employee
function Employee(iname,iage,isalary) {
	this.parent_constructor(iname,iage);
	this.salary=isalary;
}
Employee.prototype=new Person("dont matter",0);
Employee.prototype.parent_constructor=Person;
Employee.prototype.getSalary=function() {
	return this.salary;
};
Employee.prototype.setSalary=function(isalary) {
	this.salary=isalary;
};
// override Person.prototype.getName
Employee.prototype.getName=function() {
	// next line will give you infinite recursion...
	//return "Employee "+this.getName();
	return "Employee "+Person.prototype.getName.call(this);
	// dont do this at home (UGLY!!!)
	//this.tmp=Person.prototype.getName
	//return "Employee "+this.tmp()
};
// here ends code of Employee

// This is the client code
var e1=new Employee("Bilbo",111,56787);
// method of the child
console.log(e1.getSalary());
// non overridden method of the parent
console.log(e1.getAge());
// overridden method of the parent
console.log(e1.getName());
