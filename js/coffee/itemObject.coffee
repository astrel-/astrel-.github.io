App.Item = Ember.Object.extend(
    id: null
    game: null
    classid: null
    instanceid: null
    descriptions: []
    marketName: ""
    name_color: ""
    tags: []
    tradable: null
    marketable: null
    type: ""
    init: ( imgURL, imgURLlarge ) ->
        @imgURL = "http://steamcommunity-a.akamaihd.net/economy/image/" + @imgURL
        @imgURLlarge = "http://steamcommunity-a.akamaihd.net/economy/image/" + @imgURLlarge
        return
)