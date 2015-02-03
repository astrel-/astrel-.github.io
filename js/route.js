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

  App.SellgameRoute = Ember.Route.extend({
    model: function(params) {
      var model, pageModel;
      if (params.game === "dota") {
        model = this.modelFor('sell').dota;
        if ($.isEmptyObject(model)) {
          model.needsUpdate = true;
          model.jsonURL = "json/dota2.json";
        }
      } else if (params.game === "cs-go") {
        model = this.modelFor('sell').csgo;
        if ($.isEmptyObject(model)) {
          model.needsUpdate = true;
          model.jsonURL = "json/csgo.json";
        }
      } else if (params.game === "steam") {
        model = this.modelFor('sell').steam;
        if ($.isEmptyObject(model)) {
          model.needsUpdate = true;
          model.jsonURL = "json/steam.json";
        }
      }
      if (model.needsUpdate) {
        model.currentPage = parseInt(params.page);
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
          pageModel.pages = model.items.length;
          return pageModel;
        });
      }
      model.currentPage = parseInt(params.page);
      pageModel = {};
      pageModel.items = model.items[model.currentPage - 1];
      pageModel.pages = model.pages;
      pageModel.currentPage = model.currentPage;
      if (pageModel.currentPage > 1) {
        pageModel.previousPage = pageModel.currentPage - 1;
      }
      if (pageModel.currentPage < pageModel.pages) {
        pageModel.nextPage = pageModel.currentPage + 1;
      }
      return pageModel;
    }
  });

  /*
  App.SellgameRoute = Ember.Route.extend({
      model: function( params ) {
          var model;
          if ( params.game == "dota") {
              model = this.modelFor( 'sell' ).dota;
              if ( $.isEmptyObject( model ) ) {
                  model.needsUpdate = true;
                  model.jsonURL = "json/dota2.json";
              }
          }
          else if ( params.game == "cs-go" ){
              model = this.modelFor( 'sell' ).csgo;
              if ( $.isEmptyObject( model ) ) {
                  model.needsUpdate = true;
                  model.jsonURL = "json/csgo.json";
              }
          }
          else { 
              model = this.modelFor( 'sell' ).steam;
              if ( $.isEmptyObject( model ) ) {
                  model.needsUpdate = true;
                  model.jsonURL = "json/steam.json";
              }
          }
  
          if ( model.needsUpdate ) {
              //Updating whole Sell Model 
              model.needsUpdate = false;
          }
          else {
              //Getting list of items from Sell Model
          }
          return model;
      }
  });
  
  App.SellRoute = Ember.Route.extend({
      model: function() {
          var data = {
              dota: {},
              csgo: {},
              steam: {}
          };
          return data;
      } 
  });
  */


}).call(this);
