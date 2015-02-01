App.ApplicationController = Ember.Controller.extend(
	name: null
	money: null
	actions: 
		logIn: ->
			@set("name", "Bubalus")
			@set("money", 900)
			return
		logOut: -> 
			@set("name", null)
			@set("money", null)
			return
)
