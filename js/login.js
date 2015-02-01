(function() {
  App.ApplicationController = Ember.Controller.extend({
    name: null,
    money: null,
    actions: {
      logIn: function() {
        this.set("name", "Bubalus");
        this.set("money", 900);
      },
      logOut: function() {
        this.set("name", null);
        this.set("money", null);
      }
    }
  });

}).call(this);
