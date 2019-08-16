/*
 * This is a new button which extends the regular form button and which does a default
 * action on click.
 *
 * Notice the following:
 * - The double include protect (if(!dojo._hasResource...)
 * - The provide clause.
 * - The require clause(s).
 * - The use of dojo.declare and the ability to have multiple parents.
 * - The fact the the childs members and methods are passed as a single JS object.
 *
 * Mark Veltzer <mark.veltzer@gmail.com>
 */
if(!dojo._hasResource["extend.Ebutton"]){
	dojo._hasResource["extend.Ebutton"]=true;
	dojo.provide("extend.Ebutton");
	dojo.require("dijit.form.Button");
	dojo.declare(
		"extend.Ebutton",
		[dijit.form.Button],
		{
			onClick: function() {
				console.debug("click click");
			}
		}
	);
}
