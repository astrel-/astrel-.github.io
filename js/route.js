(function() {
  App.ApplicationRoute = Ember.Route.extend({
    model: function() {
      var bets;
      return bets = {
        team1: [],
        team2: [],
        total: 0,
        needtoPay1: 0,
        needtoPay2: 0
      };
    }
  });

}).call(this);
