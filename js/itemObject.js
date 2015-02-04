(function() {
  App.Item = Ember.Object.extend({
    id: null,
    game: null,
    classid: null,
    instanceid: null,
    descriptions: [],
    marketName: "",
    name_color: "",
    tags: [],
    tradable: null,
    marketable: null,
    type: "",
    init: function(imgURL, imgURLlarge) {
      this.imgURL = "http://steamcommunity-a.akamaihd.net/economy/image/" + this.imgURL;
      this.imgURLlarge = "http://steamcommunity-a.akamaihd.net/economy/image/" + this.imgURLlarge;
    }
  });

}).call(this);
