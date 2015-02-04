(function() {
  App.SellRoute = Ember.Route.extend({
    model: function() {
      var data;
      return data = {
        dota: {},
        csgo: {},
        steam: {}
      };
    }
  });

  App.SellIndexRoute = Ember.Route.extend({
    redirect: function() {
      this.transitionTo('sellgame', 'dota');
    }
  });

  App.SellgameRoute = Ember.Route.extend({
    model: function(params) {
      var model, pageModel;
      if (params.game === "dota") {
        model = this.modelFor('sell').dota;
        if ($.isEmptyObject(model)) {
          model.needsUpdate = true;
          model.jsonURL = "json/dota2.json";
          model.game = "dota";
        }
      } else if (params.game === "cs-go") {
        model = this.modelFor('sell').csgo;
        if ($.isEmptyObject(model)) {
          model.needsUpdate = true;
          model.jsonURL = "json/csgo.json";
          model.game = "cs-go";
        }
      } else if (params.game === "steam") {
        model = this.modelFor('sell').steam;
        if ($.isEmptyObject(model)) {
          model.needsUpdate = true;
          model.jsonURL = "json/steam.json";
          model.game = "steam";
        }
      }
      if (model.needsUpdate) {
        if (!model.currentPage) {
          model.currentPage = 1;
        }
        return $.getJSON(model.jsonURL).then(function(dataJSON) {
          var e, pageModel;
          model.needsUpdate = false;
          model.items = App.sliceItems(App.parse(dataJSON).items);
          model.pages = model.items.length;
          App.fillLastPage(model.items[model.pages - 1]);
          pageModel = {};
          try {
            pageModel.items = model.items[model.currentPage - 1];
          } catch (_error) {
            e = _error;
            console.log(e);
          }
          pageModel.game = params.game;
          pageModel.pages = model.items.length;
          pageModel.currentItem = pageModel.items[0];
          model.currentItem = pageModel.currentItem;
          pageModel.currentPage = model.currentPage;
          pageModel.previousPage = pageModel.currentPage > 1 ? pageModel.currentPage - 1 : null;
          pageModel.nextPage = pageModel.currentPage < pageModel.pages ? pageModel.nextPage = pageModel.currentPage + 1 : null;
          return pageModel;
        });
      }
      pageModel = {};
      pageModel.items = model.items[model.currentPage - 1];
      pageModel.game = params.game;
      pageModel.pages = model.pages;
      pageModel.currentPage = model.currentPage;
      pageModel.currentItem = model.currentItem;
      pageModel.previousPage = pageModel.currentPage > 1 ? pageModel.currentPage - 1 : null;
      pageModel.nextPage = pageModel.currentPage < pageModel.pages ? pageModel.nextPage = pageModel.currentPage + 1 : null;
      return pageModel;
    },
    actions: {
      refreshList: function(game) {
        var model;
        if (game === "dota") {
          model = this.modelFor('sell').dota;
        } else if (game === "cs-go") {
          model = this.modelFor('sell').csgo;
        } else if (game === "steam") {
          model = this.modelFor('sell').steam;
        }
        model.needsUpdate = true;
        this.refresh();
      },
      showPage: function(game, page) {
        var model;
        if (game === "dota") {
          model = this.modelFor('sell').dota;
        } else if (game === "cs-go") {
          model = this.modelFor('sell').csgo;
        } else if (game === "steam") {
          model = this.modelFor('sell').steam;
        }
        model.currentPage = parseInt(page);
        this.refresh();
      },
      test: function() {
        return console.log("pressed");
      }
    }
  });

  App.SellgameIndexRoute = Ember.Route.extend({
    redirect: function(model) {
      var classid, instanceid;
      classid = model.currentItem.classid;
      instanceid = model.currentItem.instanceid;
      return this.transitionTo('sellitem', classid, instanceid);
    }
  });

  /*
      redirect: ( model ) ->
          classid = model.currentItem.classid
          instanceid = model.currentItem.instanceid
          console.log "redir"
          @transitionTo 'sellitem', classid, instanceid
  */


  App.SellitemRoute = Ember.Route.extend({
    model: function(params) {
      var game, gamePicURL, item, itemModel, itemsPage, modelSell;
      game = this.modelFor('sellgame').game;
      if (game === "dota") {
        modelSell = this.modelFor('sell').dota;
        gamePicURL = '/pic/games/dota2.jpg';
      } else if (game === "cs-go") {
        modelSell = this.modelFor('sell').csgo;
        gamePicURL = '/pic/games/csgo.jpg';
      } else if (game === "steam") {
        modelSell = this.modelFor('sell').steam;
        gamePicURL = '/pic/games/steam.jpg';
      }
      itemsPage = this.modelFor('sellgame').items;
      itemModel = ((function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = itemsPage.length; _i < _len; _i++) {
          item = itemsPage[_i];
          if (item && item.classid === params.classid && item.instanceid === params.instanceid) {
            _results.push(item);
          }
        }
        return _results;
      })())[0];
      modelSell.currentItem = itemModel;
      itemModel.gamePicURL = gamePicURL;
      return itemModel;
    }
  });

}).call(this);
