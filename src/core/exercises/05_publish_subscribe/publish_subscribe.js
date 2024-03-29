#!/usr/bin/env node
// Here comes the post office implementation...
function PostOffice() {
	if(PostOffice.instance) {
		throw "already created!";
	} else {
		this.subscribers={};
		PostOffice.instance=this;
	}
}
PostOffice.instance=undefined;
PostOffice.getInstance=function() {
	if(PostOffice.instance==undefined) {
		PostOffice.instance=new PostOffice();
	}
	return PostOffice.instance;
};
PostOffice.prototype.subscribe=function(evt,obj,method) {
	if(!this.subscribers[evt]) {
		this.subscribers[evt]=[];
	}
	this.subscribers[evt].push([obj,method]);
};
PostOffice.prototype.publish=function(evt,data) {
	if(this.subscribers[evt]) {
		for(var x in this.subscribers[evt]) {
			var oam=this.subscribers[evt][x];
			var curr_obj=oam[0];
			var curr_method=oam[1];
			curr_obj[curr_method](data);
		}
	}
};

// Listener to test the post office...
function Listener(name,age) {
	// keep lint happy
	console.log(name,age);
}
Listener.prototype.notify=function(data) {
	console.log("this is an alert with data ["+data+"]");
};

//var po=new PostOffice();
var p=new Listener("mark",435);
PostOffice.getInstance().subscribe("myeventname",p,"notify");
// publish the event (no data for now...)
PostOffice.getInstance().publish("myeventname",["this is some data"]);
