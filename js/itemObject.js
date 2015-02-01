(function() {
  App.Item = Ember.Object.extend({
    id: null,
    imgURL: "",
    init: function(imgURL) {
      this.image = "http://steamcommunity-a.akamaihd.net/economy/image/" + this.imgURL;
    }
  });

}).call(this);
