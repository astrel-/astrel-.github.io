App = Ember.Application.create();

App.Router.map(function() {
	//sidebar
	this.resource( "steam" );
	this.resource( "dota" );
	this.resource( "cs-go" );
	this.resource( "tf" );
	this.resource( "sell" );

	//nav
	this.resource( "faq" );
	this.resource( "about" );
});


App.ApplicationController = Ember.Controller.extend({
	//name: "Bubalus",
	money: 900
});

