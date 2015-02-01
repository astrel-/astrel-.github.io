window.App = Ember.Application.create()

App.Router.map( ->
	#sidebar
	this.resource( "steam" )
	this.resource( "dota" )
	this.resource( "cs-go" )
	this.resource( "tf" )
	#sell
	this.resource( "sell", -> 
		this.resource( "sellgame", 
			path: "/:game/:page")
		return
		)
	#nav
	this.resource( "faq" )
	this.resource( "about" )
	return
)
