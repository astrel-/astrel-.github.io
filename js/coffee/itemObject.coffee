App.Item = Ember.Object.extend(
    id: null
    imgURL: ""
    init: (imgURL) ->
        this.image = "http://steamcommunity-a.akamaihd.net/economy/image/" + this.imgURL
        return
)