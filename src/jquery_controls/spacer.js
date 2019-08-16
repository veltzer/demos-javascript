
function SpacerElem(elid) {
	this.el=$(elid);
}
function Spacer(id,margin) {
	this.total=$(id);
	this.stopResize=true;
	this.doDebug=false;
	this.margin=margin;
	this.elems=[];
	// for closure
	var widget=this;
	// registering on a single DOM element for resize does not work.
	// instead we register on the entire window.
	//this.total.resize(function() {
	$(window).resize(function() {
		widget.resize();
	});
}
Spacer.prototype.debug=function(msg) {
	if(this.doDebug) {
		console.log(msg);
	}
};
Spacer.prototype.addElem=function(elem) {
	this.elems.push(elem);
	elem.el.appendTo(this.total);
	this.resize();
};
Spacer.prototype.stopResize=function() {
	this.stopResize=true;
};
Spacer.prototype.startResize=function() {
	this.stopResize=false;
	this.resize();
};
Spacer.prototype.resize=function() {
	if(this.stopResize) {
		return;
	}
	// the next line is wrong. We need our own containers size and
	// not the entire window...
	//var total_width=$(window).width();
	var total_width=this.total.width();
	this.debug('total_width='+total_width);
	var sum_width=0;
	for(var i in this.elems) {
		var elem=this.elems[i];
		sum_width+=elem.el.width();
		this.debug('i '+i+', width '+elem.el.width());
	}
	var space=(total_width-sum_width-2*this.margin)/(this.elems.length-1);
	var runner=this.margin;
	for(var ii in this.elems) {
		var ielem=this.elems[ii];
		ielem.el.offset({left:runner});
		this.debug('ii '+ii+', width '+ielem.el.width());
		runner+=ielem.el.width()+space;
	}
};
