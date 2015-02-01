window.App = Ember.Application.create()

App.Router.map( ->
	#sidebar
	@resource( "steam" )
	@resource( "dota" )
	@resource( "cs-go" )
	@resource( "tf" )
	#sell
	@resource( "sell", -> 
		@resource( "sellgame", 
			path: "/:game/:page")
		return
		)
	#nav
	@resource( "faq" )
	@resource( "about" )
	return
)
