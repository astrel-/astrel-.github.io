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
			path: "/:game",
			() ->
				@resource( "sellitem",
					path: "/:classid/:instanceid")
		)
		return
		)
	#nav
	@resource( "faq" )
	@resource( "about" )
	return
)
