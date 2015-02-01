(function() {
  App.Item = Ember.Object.extend({
    id: null,
    init: function(imgURL) {
      this.imgURL = "http://steamcommunity-a.akamaihd.net/economy/image/" + this.imgURL;
    }
  });

}).call(this);
