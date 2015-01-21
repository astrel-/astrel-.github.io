App = Ember.Application.create();

App.Router.map(function() {
	this.resource( "steam" );
	this.resource( "dota" );
	this.resource( "cs-go" );
	this.resource( "tf" );
	this.resource( "sell" );
});

App.ApplicationRoute = Ember.Route.extend({});


//App.register('template', 'ViewName', Ember.Handlebars.compile(template));


/*
App.SteamRoute = Ember.Route.extend({
	renderTemplate: function() {
		this.render( "templates/steam.hbs" );
	}
});*/