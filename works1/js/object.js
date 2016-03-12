// gloval namespace
var app = {} || app;

// sub namespace 
app.toDo = {} ;
app.event = {};

// create container called app.commonMethod for common amethod and properties

app.commonMetod = {
	regExForName : "" ,// define regex for name validation
	regExForPhone : "", // define regex for phone no validation
	validateName : function( name ) {
		// Do something with name , you can access regExForName 
		// using , "this.regExForName"
	},
	validatePhoneNo : function(phoneNo) {
		// do something with phone number
		// using "this.regExForPhone"
	}
}
// object togethe with the method declarations 
app.toDo = {
	addListener: function( el, type, fn) {
		// code stuff
	},
	removeListener: function( el, type, fn)
}
