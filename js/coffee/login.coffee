App.ApplicationController = Ember.Controller.extend
	team1: "Na'Vi"
	team2: "Alliance"
	coef1: 1.5
	coef2: 1.5
	money: 0
	r: (->
		prob1 = 1/1.5
		prob2 = 1/1.5

		return 100*(prob1+prob2-1).toFixed 2
		).property()
	ratio: (->
		coef1 = @get 'coef1'
		coef2 = @get 'coef2'

		return coef1/coef2
		).property()


	actions:
		go: ->
			coef1 = @get 'coef1'
			coef2 = @get 'coef2'

			oldR = 1/coef1 + 1/coef2-1

			newR = (@get 'r')/100

			console.log oldR
			console.log newR

			@set 'coef1', (coef1*(oldR+1)/(newR+1)).toFixed 2
			@set 'coef2', (coef2*(oldR+1)/(newR+1)).toFixed 2


		changeRatio: ->
			coef1 = @get 'coef1'
			coef2 = @get 'coef2'

			oldRatio = coef1/coef2
			newRatio = (@get 'ratio')/1

			console.log oldRatio+1
			console.log newRatio+1

			@set 'coef1', (coef1*(newRatio+1)/(oldRatio+1)).toFixed 2
			@set 'coef2', (coef2*(newRatio+1)/(oldRatio+1)*oldRatio/newRatio).toFixed 2

		bet: (team) ->
			model = @get 'model'
			money = (@get 'money')/1
			if team == 1 and money
				coef = @get 'coef1'
				@set 'model.total', (model.total/1+money).toFixed 2
				@set 'model.needtoPay1', (model.needtoPay1/1+money*coef).toFixed 2
				model.team1.pushObject
					money: money
					coef: coef
			if team == 2 and money
				coef = @get 'coef2'
				@set 'model.total', (model.total/1+money).toFixed 2
				@set 'model.needtoPay2', (model.needtoPay2/1+money*coef).toFixed 2
				model.team2.pushObject
					money: money
					coef: coef
			@set 'model', model

