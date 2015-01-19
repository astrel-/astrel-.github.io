/*window.App = {
	Views: {},
	Models: {},
	Collections: {},
	Router: {}
};
*/

var Workspace = Backbone.Router.extend({

	routes: {
		"steam": "steam",
		"dota2": "dota2",
		"cs-go": "csgo"
	},

	steam: function() {
		console.log( "steam" );
	},

	dota2: function() {
		console.log( "dota 2" );
	},

	csgo: function() {
		console.log( "cs-go" );
	}
});

Backbone.history.start()