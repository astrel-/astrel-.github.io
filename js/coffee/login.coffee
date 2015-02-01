App.ApplicationController = Ember.Controller.extend(
	name: null
	money: null
	actions: 
		logIn: ->
			this.set("name", "Bubalus")
			this.set("money", 900)
			return
		logOut: -> 
			this.set("name", null)
			this.set("money", null)
			return
)
