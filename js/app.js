(function() {
  window.App = Ember.Application.create();

  App.Router.map(function() {
    this.resource("steam");
    this.resource("dota");
    this.resource("cs-go");
    this.resource("tf");
    this.resource("sell", function() {
      this.resource("sellgame", {
        path: "/:game"
      }, function() {
        return this.resource("sellitem", {
          path: "/:classid/:instanceid"
        });
      });
    });
    this.resource("faq");
    this.resource("about");
  });

}).call(this);
